import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link, useParams, useNavigate} from 'react-router-dom'
// import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineClose, MdOutlineTimer } from 'react-icons/md'
import { getResults } from '../features/resultsSlice'
import { FiCheck } from 'react-icons/fi'


const ReviewResultsPage = () => {
    const {id} = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const token = useSelector((state) => state.userData.user_token);
    const userId = useSelector((state)=> state.userData.user_id);
    const topics = useSelector((state) => state.topics.data);
    const quiz = topics.filter(topic => id === topic._id);
    const quizResults = useSelector((state) => state.answers.quizResults);
    const answers = quizResults.length > 0 ? quizResults[0].results : [];
    const score = quizResults.length > 0 ? quizResults[0].score : "";
    
    const answerDesignations = ['A.', 'B.', 'C.', 'D.'];

    const correct = {
        color: 'green',
        borderColor: '#3f3',
        borderWidth: '2px',
        background: '#cfc',
    }

    const wrong = {
        borderColor: 'red',
        color: 'red',
        background: '#FFE6E6',
        borderWidth: '2px',
    };

    const empty = {
        borderColor: '#1D2939',
        background: '#fff',
        borderWidth: '2px',
       }

       useEffect(() => {
        const timer = setTimeout(() => {
        //   navigate(`/quiz/${id}/results`)
        // window.location.reload()
        }, 10000) 
    
        return () => clearTimeout(timer)
    }, [])
    
    console.log(answers);

return (
    <div className='font-Roboto'>
        {/* header */}
        <div className='py-6 px-6 lg:py-10 lg:px-16 bg-[#0267FF] text-white flex lg:flex-row flex-col-reverse lg:justify-between' id='quiz-header'>
            {/* <div className='lg:hidden flex items-center font-normal'><IoIosArrowBack className='mr-2'/>
            </div> */}
            <div>
            <p className='flex flex-shrink text-2xl font-semibold'>Test your knowledge on {quiz[0].topic}</p>
            <p>Practice Quiz .1 hour</p>
            </div>
            <div className='flex items-center justify-center text-[27.65px] font-semibold lg:w-1/3 lg:justify-end'><MdOutlineTimer className='w-14 h-8'/> 00:00:00 </div>
        </div>
        {/* Score */}
        <div className='flex lg:justify-between bg-[#F0F2F4] px-16 py-6 mb-20'>
            <div className='text-[#1d2939] font-semibold flex flex-col relative lg:right-0 right-10 flex-shrink-0'>
                <p className='lg:text-4xl text-2xl'>{score >= 40 ? 'Congratulations! You passed!' : 'Sorry! you failed!'}</p>
                <p className='lg:text-3xl text-[18px] '>Grade received <span style={score >= 40 ? {color: '#3f3'} : {color: 'red'}}>{score}%</span> To pass 80% or higher</p>
            </div>
            <NavLink to='/quizzes'>
            <button className='bg-[#0267FF] px-8 py-3 hidden lg:block'>Next Item</button>
            </NavLink>
        </div>
        {/* Results */}
        {
            answers.length > 0 ? (
            <div className='flex flex-col items-center justify-center mx-5'>
            <div>
            {answers  &&
                answers.map((result, index) => (
                    <div key={index}>
                    {/* Render the individual result */}
                        <p className='mb-5 lg:text-2xl text-base'>
                        {result.questionNumber}. {result.question} 
                        </p>
                    <div className='grid lg:grid-cols-2 grid-cols-1  gap-x-28'>
                        {result.answers.map((answer, answerIndex) => {
                        const letter = answerDesignations[answerIndex % answerDesignations.length];
                        const correctAnswer = result.answers.find(answer => answer.is_correct);
                        const chosenAnswer = result.answers.find(answer => answer.is_chosen);
                        const isChosen = answer.text === chosenAnswer.text;
                        const isCorrect = answer.text === correctAnswer.text;
                        const isWrongChoice = isChosen && !isCorrect;
    
                        return (
                            <>
                                <div key={answer._id}>
                                    <div  
                                    className={'flex rounded-md items-center justify-between p-4 mb-4 '} style={isWrongChoice ? wrong : isChosen ? correct : empty}>
                                    {letter}
                                    {answer.text}
                                    {isWrongChoice ? <MdOutlineClose /> : isChosen ? <FiCheck /> : <input type='radio' style={{borderColor: '#1D2939'}}/>}
                                    </div>
                                </div>
                                <div className='text-lg font-semibold bg-gray-100 border-2 rounded absolute right-20 lg:block hidden'>{answer.points}/10 points</div>
                            </>
                        );
                    })}
            </div>
            {/* correct answer */}
            <p className="my-16 rounded-lg border-2 border-[#3f3] bg-[#cfc] py-5 flex justify-center items-center">
                {result.answers.map((answer, answerIndex) => {
                    const letter = answerDesignations[answerIndex % answerDesignations.length];
            return (
                    <span key={answerIndex} >
                        {answer.is_correct && answer.text ? letter : null }
                        {answer.is_correct && answer.text}
                    </span>
                    );
                })}
            </p>
          </div>
        ))}
    </div>
    
    
                <div className='my-5 hidden lg:block '>
                    <Link to={`/quiz/${id}/quizintro`}>
                    <button className='bg-[#0267FF] px-10 py-3'>Try again</button>
                    </Link>
                </div>
                <div className='lg:hidden'>
                <NavLink to='/quizzes'>
                <button className='bg-[#0267FF] px-8 py-3 w-80'>Next Item</button>
                </NavLink>
                </div>
            </div> ) 
            : 
            (<div>Please wait for your results...</div>)
        }
    </div>
  )
}

export default ReviewResultsPage
