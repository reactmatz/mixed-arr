let mixed = [1, 'two', true, null, {key: 'value'}];
for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] === 'number') {
    console.log('Number');
  } else if (typeof mixed[i] === 'string') {
    console.log('String');
  } else {
    console.log('Other');
  }
}
