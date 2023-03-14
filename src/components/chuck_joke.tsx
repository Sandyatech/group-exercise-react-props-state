import ChuckJokeProps from '../joke'
const ChuckJoke: React.FC<ChuckJokeProps> = ({ id, joke }) => <p>{id}.{joke}</p>
export default ChuckJoke;
