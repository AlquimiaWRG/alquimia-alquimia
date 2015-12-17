module.exports = [() => {
  return {
    restrict: 'A',
    scope: { qBackground: '=*' },
    link: (scope, element) => {
      var stopWatching = scope.$watch('qBackground', (url) => {
        if (url) {
          stopWatching();
          let image = new Image();
          image.onload = () => {
            element.css('background-image', `url(${url})`);
          };

          image.src = url;
        }
      });
    }
  };
}];
