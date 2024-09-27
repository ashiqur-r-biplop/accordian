function handleAccordion(title) {
    const header = title.parentElement.parentElement; // Get the parent accordion-header
    const item = header.parentElement; // Get the parent accordion-item
    const content = header.nextElementSibling; // Get the accordion content
  
    // Toggle 'active' class for opening/closing the accordion
    const isOpen = item.classList.toggle('active'); 
  
    // Smooth open/close behavior
    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + 'px'; // Open
    } else {
      content.style.maxHeight = null; // Close
    }
  
    // Toggle the icon visibility between + and -
    const plusIcon = header.querySelector('.fa-plus');
    const minusIcon = header.querySelector('.fa-minus');
  
    if (isOpen) {
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'inline'; // Show minus icon
    } else {
      plusIcon.style.display = 'inline'; // Show plus icon
      minusIcon.style.display = 'none';
    }
  
    // Optional: Close other open accordion items
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-content').style.maxHeight = null;
        otherItem.querySelector('.fa-plus').style.display = 'inline';
        otherItem.querySelector('.fa-minus').style.display = 'none';
      }
    });
  }
  
