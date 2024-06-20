


let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .line', {
  y: '100%',
  opacity: 0,
  duration: 1,
  ease: 'circ.out',
  stagger: 0.25,
})



