interface NavAnimationProps {
	ulElem?: HTMLElement
	isOpen: boolean
	minHeight: string
}

export default function navAnimation(node: HTMLElement, { minHeight, isOpen }: NavAnimationProps) {
	node.style.height = isOpen ? 'auto' : minHeight
	node.style.overflow = 'hidden'

	let wasOpen = isOpen

	return {
		update({ minHeight, ulElem, isOpen }: NavAnimationProps) {
			if (wasOpen === isOpen) {
				return
			}
			wasOpen = isOpen

			const animation = node.animate(
				[{ height: ulElem ? ulElem.offsetHeight + 'px' : '3rem' }, { height: minHeight }],
				{ duration: 100, fill: 'both' },
			)
			animation.pause()

			if (isOpen) {
				animation.reverse()
				animation.addEventListener('finish', () => {
					animation.cancel()
					node.style.height = 'auto'
				})
			} else {
				animation.play()
			}
		},
	}
}
