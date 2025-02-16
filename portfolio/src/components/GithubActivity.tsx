import { memo } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  return (
    <div className="flex items-center justify-center h-full w-full overflow-hidden p-2">
      <div className="w-full overflow-x-auto">
        <GitHubCalendar 
          username="TwicePie"
          colorScheme='dark'
          fontSize={6}
          hideColorLegend
          hideMonthLabels
          style={{ width: '100%', maxWidth: '100%' }}
          loading={true}
        />
      </div>
    </div>
  );
};

export default memo(GithubActivity);
