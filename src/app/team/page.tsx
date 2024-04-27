import ExpTeam from '@/components/team/ExpTeam';
import Title from '@/components/title/Tittle';
import * as React from 'react';

interface ITeamPagesProps {
}

const TeamPages: React.FunctionComponent<ITeamPagesProps> = async (props) => {
    const res = await fetch("http://localhost:3000/api/team");
     const convert = await res.json();
     const teamData = convert.data;


    return <section>
        <section className="bg-white dark:bg-gray-900">
            <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
                <div className="container px-6 py-10 mx-auto">
                    <Title name="The Executive Team" />
                   

                    <div className="flex justify-center mx-auto mt-6">
                        <span className="inline-block w-40 h-1 bg-green-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 mx-1 bg-green-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
                    </div>

                   
                </div>
            </div>

            <div className=" px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96 max-w-7xl">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {
                        teamData?.slice(0,3).map((teamMember:any) => <ExpTeam key={teamMember.id} member={teamMember} />)
                    }


                </div>
            </div>
        </section>
    </section>;
};

export default TeamPages;
