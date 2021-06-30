import styled from 'styled-components'

const Button = styled.button`
  background-color: var(--purple-color);
  font-size: 1rem;
  padding: 10px 20px;
  width: 160px;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    opacity: 0.9;
    box-shadow: 2px 2px 5px rgba(129, 102, 203, 0.6);
  }
`

export { Button }