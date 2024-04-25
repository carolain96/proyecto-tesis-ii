import { MdOutlineSchool, MdSchool } from 'react-icons/md';
import { PiBooks, PiBooksFill, PiExam, PiExamBold, PiExamFill, PiCertificate, PiCertificateBold, PiCertificateFill} from 'react-icons/pi'
import { BiCategory, BiSolidCategory } from 'react-icons/bi';

const menuItems = () => [
    {
        path:"/estudio",
        name:"Dashborad",
        iconWhite: <BiCategory color='white' style={{ width:25, height:25 }} />,
        iconFill: <BiSolidCategory color='white' style={{ width:25, height:25 }} />,
    },
    {
        path:"/estudio/programas",
        name:"Juridisprudencia",
        iconWhite: <PiBooks color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiBooksFill color='white' style={{ width:25, height:25 }} />,
    },
    {
        path:"/estudio/examenes",
        name:"Expedientes",
        iconWhite: <PiExam color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiExamFill color='white' style={{ width:25, height:25 }} />,
    },
    {
        path:"/estudio/notas",
        name:"Leyes",
        iconWhite: <MdOutlineSchool color='white' style={{ width:25, height:25 }} />,
        iconFill: <MdSchool color='white' style={{ width:25, height:25 }} />,
    },
    {
        path:"/estudio/certificados",
        name:"Otros",
        iconWhite: <PiCertificate color='white' style={{ width:25, height:25 }} />,
        iconFill: <PiCertificateFill color='white' style={{ width:25, height:25 }} />,
    },
];

export default menuItems;