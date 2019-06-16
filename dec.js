class Boy {
  @speak('中文')
  run() {
    console.log('i can run' + this.language);
  }
}

function speak(language) {
  return function(target, key, descriptor) {
    console.dir(target);
    console.log(key);
    console.log(descriptor);

    target.language = language;

    return descriptor;
  };
}

const luke = new Boy();
luke.run();
