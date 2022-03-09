import { useEffect, useState, useCallback, FC } from 'react'
import EfficientCursor from 'react-efficient-cursor'
import cn from 'classnames'
import css from './Cursor.module.scss'

const Cursor: FC = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [pressed, setPressed] = useState<boolean>(false)
  const isMobile = window.innerWidth < 992

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const onSelect = !!(e.target as HTMLElement).closest('.hover')
    setHovered(onSelect)
  }, [])

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const handleMouseDown = () => setPressed(true)
  const handleMouseUp = () => setPressed(false)

  return !isMobile ? (
    <>
      <EfficientCursor speed={0.15}>
        <div className={cn(css.Cursor, { [css.Cursor_pressed]: pressed, [css.Cursor_hovered]: hovered })} />
      </EfficientCursor>
      <EfficientCursor speed={0.6} onMove={handleMouseEnter}>
        <div
          className={cn(css.CursorInner, { [css.CursorInner_pressed]: pressed, [css.CursorInner_hovered]: hovered })}
        ></div>
      </EfficientCursor>
    </>
  ) : null
}

export default Cursor
