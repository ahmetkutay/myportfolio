const express = require('express');
const router = express.Router();

/**
 * Handle contact form submissions
 */
router.post('/contact', (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).send(`
        <div class="p-4 bg-red-500/20 border border-red-500 rounded-md mb-6">
          <p class="text-red-500">Please fill in all required fields.</p>
        </div>
        <form hx-post="/api/contact" hx-swap="outerHTML" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-gray-300 mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" value="${name || ''}" required
                class="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors">
            </div>

            <div>
              <label for="email" class="block text-gray-300 mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" value="${email || ''}" required
                class="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors">
            </div>
          </div>

          <div>
            <label for="subject" class="block text-gray-300 mb-2">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject of your message" value="${subject || ''}" required
              class="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors">
          </div>

          <div>
            <label for="message" class="block text-gray-300 mb-2">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message" required
              class="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none">${message || ''}</textarea>
          </div>

          <div>
            <button type="submit" class="btn btn-primary w-full">
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      `);
    }

    // In a real application, you would send an email or store the message in a database
    console.log('Contact form submission:', { name, email, subject, message });

    // Return success message
    return res.send(`
      <div class="p-8 bg-green-500/20 border border-green-500 rounded-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-green-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <h3 class="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
        <p class="text-gray-300 mb-6 text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        <button
          class="btn btn-primary"
          hx-get="/partials/contact"
          hx-target="#main-content"
          hx-push-url="true"
          hx-swap="innerHTML transition:true"
        >
          Send Another Message
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </button>
      </div>
    `);
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).send(`
      <div class="p-8 bg-red-500/20 border border-red-500 rounded-lg text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-red-500 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h3 class="text-2xl font-bold text-white mb-4">Something Went Wrong</h3>
        <p class="text-gray-300 mb-6 text-lg">An error occurred while processing your request. Please try again later.</p>
        <button
          class="btn btn-primary"
          hx-get="/partials/contact"
          hx-target="#main-content"
          hx-push-url="true"
          hx-swap="innerHTML transition:true"
        >
          Try Again
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    `);
  }
});

module.exports = router;