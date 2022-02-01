import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import java from 'highlight.js/lib/languages/java';

import Clipboard from 'clipboard';

// Register languages that we expect to use in code snippets
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('java', java);

// Find the alert element on the page
const alert = document.querySelector("#copied-alert");

const hideAlert = () => {
  alert?.classList.add("invisible", "opacity-0");
}

// Wait for page to be loaded
document.addEventListener('DOMContentLoaded', () => {
  // Find the code snippets (make sure to not to select mermaid diagrams)
  document.querySelectorAll('pre code:not(.language-mermaid)').forEach((block) => {
    // Add a copy code button
    block.insertAdjacentHTML('beforebegin', '<button class="code-copy"><span class="sr-only">copy</span><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button>');
    // Highlight the code block
    hljs.highlightElement(block);
  });

  // Instantiate the clipboard functionality
  const clipboard = new Clipboard('.code-copy', {

    // Select the correct target from the trigger (button)
    target: function(trigger) {
      return trigger.nextElementSibling;
    },
  
  });
  
  
  clipboard.on('success', function(e) {
      // Clear the selection after successful copy
      e.clearSelection();
      // Show the alert to notify user that copy was successful
      alert?.classList.remove("invisible", "opacity-0");
      window.setTimeout(hideAlert, 1000);
  });
});