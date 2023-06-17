import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Stories = () => {
    // Dados de exemplo para os stories
    const stories = [
        {
            id: 1,
            username: 'usuario1',
            imageUrl: 'https://picsum.photos/200',
        },
        {
            id: 2,
            username: 'usuario2',
            imageUrl: 'https://picsum.photos/200',
        },
        // Adicione mais histórias conforme necessário
    ];

    return (
        <div className="stories-container">
            {stories.map(story => (
                <div key={story.id} className="story">
                    <img src={story.imageUrl} alt={story.username} />
                    <span className="username">{story.username}</span>
                </div>
            ))}
        </div>
    );
};

export default Stories;