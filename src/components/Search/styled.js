import styled from "styled-components"

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 0;
  }
  .ais-Stats {
    color: var(--colorFont);
  }
  .ais-SearchBox-input {
    background: none;
    border: none;
    color: #2f363d;
    display: flex;
    font-size: 1.5rem;
    padding-left: 0.5rem;
    width: 100%;
    &::placeholder {
      color: #2f363d;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Hits-list{
    padding: 0;
    list-style-type: none;
  }
`

export const Container = styled.div.attrs(props => ({
  className: "container"
}))``