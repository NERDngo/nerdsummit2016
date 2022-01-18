/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.mobile_menu = {
  attach: function(context, settings) {
    var $hamburger = $('#hamburger-wrap');
    $hamburger.on('click', function() {
      $hamburger.toggleClass('menu-hidden');
    });
  }
};

Drupal.behaviors.toggleUserLogin = {
  attach: function(context, settings) {
    $('.toggle-login').find('a').click(function(e) {
      e.preventDefault();
      $('#block-nerd-homepage-login-registration-block').addClass('open-registration');
    }).parents().find('.register-collapse').click(function(e) {
          e.preventDefault();
          $(this).parents().find('#block-nerd-homepage-login-registration-block').removeClass('open-registration');
      });
  }
};

})(jQuery, Drupal, this, this.document);
;
