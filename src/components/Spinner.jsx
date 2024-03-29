import FadeLoader from 'react-spinners/FadeLoader'

const override = {
    display: 'block',
    margin: '100px auto',

}

const Spinner = ({ loading }) => {
    return (
        <FadeLoader
            color='#4338ca'
            loading={loading}
            size={400}
            cssOverride={override}
        />
    )
}

export default Spinner