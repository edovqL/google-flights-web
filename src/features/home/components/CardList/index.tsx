import { FlightsResponseType } from '@/domains/Flight';
import { getTimeOnly, msToTime } from '@/helpers/time';

import * as Styled from './card.styles';

const CardList = ({ flight }: { flight: FlightsResponseType }) => {
    const firstLeg = flight.legs[0];
    const stops = firstLeg.segments.length;

    return (
        <div className="flight-card">
            <Styled.SectionBox>
                <img src={firstLeg.carriers.marketing[0].logoUrl} style={{ width: '35px', height: '35px' }} alt="airline logo" />
            </Styled.SectionBox>
            <Styled.SectionBoxFlex style={{ minWidth: '50px' }}>
                <div>
                    <strong>{`${getTimeOnly(firstLeg.departure)} - ${getTimeOnly(firstLeg.arrival)}`}</strong>
                </div>
                <div>{firstLeg.carriers.marketing[0].name}</div>
            </Styled.SectionBoxFlex>
            <Styled.SectionBoxFlex style={{ minWidth: '0' }}>
                <div>{msToTime(firstLeg.durationInMinutes * 60 * 1000)}</div>
                <div>
                    {firstLeg.origin.id}-{firstLeg.destination.id}
                </div>
            </Styled.SectionBoxFlex>
            <Styled.SectionBox style={{ minWidth: '0' }}>{stops === 1 ? 'Non-stop' : `${stops - 1} stop${stops > 2 ? 's' : ''}`} </Styled.SectionBox>
            <Styled.SectionBoxFlexCenter style={{ minWidth: '0' }}>
                <div>{`${firstLeg.carriers.marketing[0].alternateId}${firstLeg.carriers.marketing[0].id}`}</div>
            </Styled.SectionBoxFlexCenter>
            <Styled.SectionBox style={{ minWidth: '50px' }}>{flight.price.formatted} </Styled.SectionBox>
        </div>
    );
};

export default CardList;
