interface Props {
  name: string
}

export const getServerSideProps = () => {
  return {
    props: {
      name: 'Gading Nasution'
    }
  }
}

function Home(props: Props) {
  return (
    <p>Hello {props.name}</p>
  )
}

export default Home;
