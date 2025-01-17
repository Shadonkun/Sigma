import './App.css';
import { ProgressProvider } from './ProgressContext';
import SigmaCoin from './images/sigmacoin.png';
import ProfilePhoto from './ProfilePhoto'; // Import the ProfilePhoto component
import ProgressBar from './ProgressBar'
import { usePoints } from './PointsContext';
import { useUser } from "./UserContext";
import { useNavigate } from 'react-router-dom';  // Import navigation hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const App: React.FC = () => {

  const { points } = usePoints();
  const { name } = useUser();

  const navigate = useNavigate();  // Hook to navigate between routes

  const handlechangename = () => {
    navigate('/setnameprompt');  // This navigates to NewComponent
  };

  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="justify content-center">
          <div className="rounded-lg bg-[#000]">
            <div className="profile">
              <ProfilePhoto />  {/* Use the ProfilePhoto component */}
            </div>
            <div className="text-center flex justify-center">
              <p className="text-4xl">{name}</p>
              <FontAwesomeIcon icon={faPenToSquare} onClick={handlechangename}/>
            </div>
            <div className="text-center flex justify-center space-x-4">
              <img src={SigmaCoin} className="w-11 h-19 mt-8"/>
              <p className="text-6xl mt-7 justify content-center"> {points} </p>
              
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-20 w-full justify-around items-center rounded-1xl">
        <ProgressProvider>
          <ProgressBar />
        </ProgressProvider>
      </div>
      
    </div>
  );
}

export default App;
