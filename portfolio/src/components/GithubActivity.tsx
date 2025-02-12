import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  return (
    <div className="p-2">
      <div className="overflow-x-auto">
        <GitHubCalendar 
          username="TwicePie"
          colorScheme='dark'
          fontSize={10}
        />
      </div>
    </div>
  );
};

export default GithubActivity;
