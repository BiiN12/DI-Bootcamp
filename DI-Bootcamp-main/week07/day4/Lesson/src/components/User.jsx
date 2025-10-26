import './User.css';
const User = (props) => {
    const { name, username, email } = props;
    return (
        <div className='p-2 m-2 bg-amber-300 border border-gray-300 rounded'>
            <h2 className='font-bold '>Name: {name}</h2>
            <h4 className='text-amber-950'>username: {username}</h4>
            <h4 className='text-amber-950'>email: {email}</h4>
        </div>
    )
}

export default User