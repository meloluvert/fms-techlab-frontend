import { Footer } from "../../components/Footer"

import { AccountCard } from "../../components/AccountCard"
export function Home() {
    return(
        <main className="flex flex-col items-center ">
        <AccountCard name="ContaX" updated_at="17/05/2025" created_at="05/05/2025" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices cursus velit et tempus. Etiam et nulla mi. Pellentesque non congue felis, sit amet congue ex. Vivamus" color="#F90000" type="Débito" balance={12}/>
        <AccountCard name="ContaX" updated_at="17/05/2025" created_at="05/05/2025" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices cursus velit et tempus. Etiam et nulla mi. Pellentesque non congue felis, sit amet congue ex. Vivamus" color="#F90000" type="Débito" balance={12}/>
        </main>
    )
}