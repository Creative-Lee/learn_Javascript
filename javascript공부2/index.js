function marry(man, woman) {
  man.wife = woman;
  woman.husband = man;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({name: "John"}, {name: "Ann"});

delete family.father
delete family.mother.husband


console.log(family.mother)