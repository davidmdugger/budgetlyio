export const useSetFocus = (ref: React.RefObject<HTMLElement>): void => {
  if (ref.current) ref.current.focus()
}