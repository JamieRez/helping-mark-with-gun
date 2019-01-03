var gun = Gun([`${window.location.href}gun`]);

gun.get('james').put({
  age : 20
})

gun.get('james').once((data) => {
  console.log(data.age);
})
