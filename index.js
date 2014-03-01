var reactive = require('reactive');

/**
 * Initialize `Nagivation`.
 */

function Navigation(el){
  this.el = el;
  this.reactive = reactive(this.el, this, this);
}

/**
 * Show the navigation
 */

Navigation.prototype.open = function(event){
  var self = this;
  var el = event.target.parentNode;
  if(el.classList.contains('open')) return;
  el.classList.add('open');
  setTimeout(function(){
    document.body.addEventListener('click', function end(click){
      if(click.target === el) return;
      el.classList.remove('open');
      document.body.removeEventListener('click', end);
    });
  }, 0);
};


/**
 * Expose `Navigation`.
 */

module.exports = new Navigation(document.querySelector('.Navigation'));