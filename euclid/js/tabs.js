document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.work_step').forEach(function(tabsBtn) {
       tabsBtn.addEventListener('click', function(event) {
           const path = event.currentTarget.dataset.path
           console.log(path)
           document.querySelectorAll('.work-content').forEach(function(workContent) {
               workContent.classList.remove('work-content-active')
           })
           document.querySelector(`[data-target="${path}"]`).classList.add('work-content-active')
       })
    });
})