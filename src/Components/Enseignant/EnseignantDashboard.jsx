import EnseignantDashNav from './EnseignantDashNav'
import EnseignantAccueil from './EnseignantComponents/EnseignantAccueil'
import './../../style/EnseignantDashboard.css'
export default function EnseignantDashboard() {
    return (
        <div className='EnseignantDashboard-container overflow-auto bg-gray-200'>
            <EnseignantDashNav />
            <div>
                <EnseignantAccueil />
            </div>
        </div>
    )
}