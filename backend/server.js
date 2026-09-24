/**
 * TechBridge Platform - Task Management REST API Server
 * Task 7: Build a TechBridge Task Management API
 * Technologies: Node.js, Express.js, CORS, JSON Persistence
 * 
 * Endpoints:
 *  - GET    /api/health       -> Server status & health check
 *  - GET    /api/tasks        -> Retrieve all 8 internship tasks
 *  - GET    /api/tasks/:id    -> Retrieve single task by ID
 *  - PUT    /api/tasks/:id    -> Update task status & persist to tasks.json
 *  - POST   /api/tasks        -> Add a new task (Optional Challenge)
 *  - DELETE /api/tasks/:id    -> Delete a task (Optional Challenge)
 */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const TASKS_FILE_PATH = path.join(__dirname, 'data', 'tasks.json');

// ============================================================================
// MIDDLEWARE CONFIGURATION
// ============================================================================

// Enable CORS for all incoming client requests
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Serve static frontend files from the parent directory
app.use(express.static(path.join(__dirname, '..')));

// ============================================================================
// HELPER FUNCTIONS FOR JSON FILE PERSISTENCE
// ============================================================================

/**
 * Reads tasks array from data/tasks.json
 * @returns {Array} List of tasks
 */
function readTasksFromFile() {
  try {
    const rawData = fs.readFileSync(TASKS_FILE_PATH, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading tasks.json file:', error.message);
    return [];
  }
}

/**
 * Writes tasks array to data/tasks.json
 * @param {Array} tasks - Array of task objects
 */
function writeTasksToFile(tasks) {
  try {
    fs.writeFileSync(TASKS_FILE_PATH, JSON.stringify(tasks, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing tasks.json file:', error.message);
    return false;
  }
}

// ============================================================================
// REST API ENDPOINTS
// ============================================================================

/**
 * Health Check Endpoint
 * GET /api/health
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'TechBridge Task Management API is running',
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

/**
 * Retrieve All Tasks
 * GET /api/tasks
 */
app.get('/api/tasks', (req, res) => {
  const tasks = readTasksFromFile();
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks
  });
});

/**
 * Retrieve Single Task by ID
 * GET /api/tasks/:id
 */
app.get('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  if (isNaN(taskId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid task ID provided. ID must be an integer.'
    });
  }

  const tasks = readTasksFromFile();
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: `Task with ID ${taskId} not found.`
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

/**
 * Update Task Status
 * PUT /api/tasks/:id
 * Body: { status: "completed" | "in-progress" | "not-started" }
 */
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  if (isNaN(taskId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid task ID. ID must be an integer.'
    });
  }

  const { status, title, description } = req.body;

  if (!status) {
    return res.status(400).json({
      success: false,
      message: 'Missing required field: "status" must be provided.'
    });
  }

  const normalizedStatus = status.toLowerCase().trim();
  const validStatuses = ['completed', 'in-progress', 'not-started'];

  if (!validStatuses.includes(normalizedStatus)) {
    return res.status(400).json({
      success: false,
      message: `Invalid status: "${status}". Must be one of: ${validStatuses.join(', ')}.`
    });
  }

  const tasks = readTasksFromFile();
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Task with ID ${taskId} not found.`
    });
  }

  // Update task fields
  tasks[taskIndex].status = normalizedStatus;
  if (title) tasks[taskIndex].title = title;
  if (description) tasks[taskIndex].description = description;

  // Persist update to tasks.json
  const writeSuccess = writeTasksToFile(tasks);
  if (!writeSuccess) {
    return res.status(500).json({
      success: false,
      message: 'Failed to write task update to storage.'
    });
  }

  console.log(`[API PUT] Task ${taskId} status updated to: "${normalizedStatus}"`);

  res.status(200).json({
    success: true,
    message: `Task ${taskId} updated successfully.`,
    data: tasks[taskIndex]
  });
});

/**
 * Add a New Task (Optional Challenge)
 * POST /api/tasks
 */
app.post('/api/tasks', (req, res) => {
  const { title, description, day, difficulty, status } = req.body;

  if (!title) {
    return res.status(400).json({
      success: false,
      message: 'Title is required to create a new task.'
    });
  }

  const tasks = readTasksFromFile();
  const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

  const newTask = {
    id: newId,
    taskNumber: `TASK ${newId}`,
    taskBadge: `Task 0${newId}`,
    title: title.trim(),
    day: day || `Day ${newId * 3}`,
    dayNumber: newId * 3,
    difficulty: difficulty || 'Intermediate',
    status: (status || 'not-started').toLowerCase().trim(),
    description: description ? description.trim() : 'New internship milestone task.',
    objective: 'Practice practical full-stack engineering skills.',
    skills: ['JavaScript', 'API Integration', 'Full-Stack Development'],
    deliverables: ['Working codebase and documented implementation.'],
    estimatedTime: '4–5 hours',
    expectedResult: 'A production-grade web platform milestone.'
  };

  tasks.push(newTask);
  writeTasksToFile(tasks);

  res.status(201).json({
    success: true,
    message: 'New task created successfully.',
    data: newTask
  });
});

/**
 * Delete a Task (Optional Challenge)
 * DELETE /api/tasks/:id
 */
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  if (isNaN(taskId)) {
    return res.status(400).json({ success: false, message: 'Invalid task ID.' });
  }

  const tasks = readTasksFromFile();
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ success: false, message: `Task ${taskId} not found.` });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];
  writeTasksToFile(tasks);

  res.status(200).json({
    success: true,
    message: `Task ${taskId} deleted successfully.`,
    data: deletedTask
  });
});

// ============================================================================
// START SERVER
// ============================================================================

app.listen(PORT, () => {
  console.log('====================================================');
  console.log(`🚀 TechBridge Task Management API running on port: ${PORT}`);
  console.log(`🌐 Base API URL: http://localhost:${PORT}/api/tasks`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`💻 Web Dashboard: http://localhost:${PORT}/dashboard.html`);
  console.log('====================================================');
});
