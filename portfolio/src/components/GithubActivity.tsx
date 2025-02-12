import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="scale-90 transform-gpu">
        <GitHubCalendar 
          username="TwicePie"
          colorScheme='dark'
          fontSize={8}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </div>
  );
};

export default GithubActivity;
