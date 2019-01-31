import 'babel-polyfill';
import {
  expect,
} from 'chai';
import { helpers } from '../src';

describe('Helpers', () => {
  describe('priorityDispatch Helper', () => {
    describe('Descriptions', () => {
      it('Correctly supplies determinate descriptions in different formats', () => {
        expect(helpers.priorityDispatch.getProtocolDescription(1)).to.equal('Abdominal Pain/Problems');
        expect(helpers.priorityDispatch.getProtocolDescription('01')).to.equal('Abdominal Pain/Problems');
        expect(helpers.priorityDispatch.getProtocolDescription('1')).to.equal('Abdominal Pain/Problems');
      });

      it('Correctly supplies subdeterminate descriptions in different formats', () => {
        expect(helpers.priorityDispatch.getSubDeterminateDescription(1, 'A', 1)).to.equal('Abdominal pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(1, 'A', '1')).to.equal('Abdominal pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription('01', 'A', '1a')).to.equal('Abdominal pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription('01', 'A', '1A')).to.equal('Abdominal pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription('01', 'B', '1a')).to.be.undefined;
      });

      it('Correctly supplies EMS descriptions', () => {
        expect(helpers.priorityDispatch.getProtocolDescription(1)).to.equal('Abdominal Pain/Problems');
        expect(helpers.priorityDispatch.getProtocolDescription(2)).to.equal('Allergies (Reactions)/Envenomations (Stings/Bites)');
        expect(helpers.priorityDispatch.getProtocolDescription(3)).to.equal('Animal Bites/Attacks');
        expect(helpers.priorityDispatch.getProtocolDescription(4)).to.equal('Assault/Sexual Assault');
        expect(helpers.priorityDispatch.getProtocolDescription(5)).to.equal('Back Pain (Non-Traumatic or Non-Recent Trauma)');
        expect(helpers.priorityDispatch.getProtocolDescription(6)).to.equal('Breathing Problems');
        expect(helpers.priorityDispatch.getProtocolDescription(7)).to.equal('Burns (Scalds)/Explosion (Blast)');
        expect(helpers.priorityDispatch.getProtocolDescription(8)).to.equal('Carbon Monoxide/Inhalation/HAZMAT/CBRN');
        expect(helpers.priorityDispatch.getProtocolDescription(9)).to.equal('Cardiac or Respiratory Arrest/Death');
        expect(helpers.priorityDispatch.getProtocolDescription(10)).to.equal('Chest Pain (Non-Traumatic)');
        expect(helpers.priorityDispatch.getProtocolDescription(11)).to.equal('Choking');
        expect(helpers.priorityDispatch.getProtocolDescription(12)).to.equal('Convulsions/Seizures');
        expect(helpers.priorityDispatch.getProtocolDescription(13)).to.equal('Diabetic Problems');
        expect(helpers.priorityDispatch.getProtocolDescription(14)).to.equal('Drowning (near)/Diving/SCUBA Accident');
        expect(helpers.priorityDispatch.getProtocolDescription(15)).to.equal('Electrocution/Lightning');
        expect(helpers.priorityDispatch.getProtocolDescription(16)).to.equal('Eye Problems/Injuries');
        expect(helpers.priorityDispatch.getProtocolDescription(17)).to.equal('Falls');
        expect(helpers.priorityDispatch.getProtocolDescription(18)).to.equal('Headache');
        expect(helpers.priorityDispatch.getProtocolDescription(19)).to.equal('Heart Problems/AICD');
        expect(helpers.priorityDispatch.getProtocolDescription(20)).to.equal('Heat/Cold Exposure');
        expect(helpers.priorityDispatch.getProtocolDescription(21)).to.equal('Hemorrhage/Laceration');
        expect(helpers.priorityDispatch.getProtocolDescription(22)).to.equal('Inaccessible Incident/Other Entrapments (Non-Vehicle)');
        expect(helpers.priorityDispatch.getProtocolDescription(23)).to.equal('Overdose/Poisoning (Ingestion)');
        expect(helpers.priorityDispatch.getProtocolDescription(24)).to.equal('Pregnancy/Childbirth/Miscarriage');
        expect(helpers.priorityDispatch.getProtocolDescription(25)).to.equal('Psychiatric/Abnormal Behavior/Suicide Attempt');
        expect(helpers.priorityDispatch.getProtocolDescription(26)).to.equal('Sick Person (Specific Diagnosis)');
        expect(helpers.priorityDispatch.getProtocolDescription(27)).to.equal('Stab/Gunshot/Penetrating Trauma');
        expect(helpers.priorityDispatch.getProtocolDescription(28)).to.equal('Stroke (CVA)/Transient Ischemic Attack (TIA)');
        expect(helpers.priorityDispatch.getProtocolDescription(29)).to.equal('Traffic/Transportation Incidents');
        expect(helpers.priorityDispatch.getProtocolDescription(30)).to.equal('Traumatic Injuries (Specific)');
        expect(helpers.priorityDispatch.getProtocolDescription(31)).to.equal('Unconscious/Fainting (Near)');
        expect(helpers.priorityDispatch.getProtocolDescription(32)).to.equal('Unknown Problem (Man Down)');
        expect(helpers.priorityDispatch.getProtocolDescription(33)).to.equal('Transfer/Interfacility/Palliative Care');
        expect(helpers.priorityDispatch.getProtocolDescription(34)).to.be.undefined;
      });

      it('Correctly supplies EMS sub determinates descriptions', () => {
        expect(helpers.priorityDispatch.getSubDeterminateDescription(1, 'A', 1)).to.equal('Abdominal pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(1, 'C', 1)).to.equal('Suspected aortic aneurysm (tearing/ripping pain) ≥50 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(1, 'C', 2)).to.equal('Known aortic aneurysm');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(1, 'C', 3)).to.equal('Fainting or near fainting ≥50 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(1, 'C', 4)).to.equal('Females with fainting or near fainting 12-50 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(1, 'C', 5)).to.equal('Males with pain above navel ≥35 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(1, 'C', 6)).to.equal('Females with pain above navel ≥ 45 years old');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'A', 1)).to.equal('No difficulty breathing or swallowing (rash, hives or itching may be present)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'A', 2)).to.equal('Spider bite');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'B', 1)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'C', 1)).to.equal('Difficulty breathing or swallowing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'C', 2)).to.equal('History of severe allergic reaction');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'D', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'D', 2)).to.equal('Difficulty speaking between breaths');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'D', 3)).to.equal('Swarming attack (bee, wasp, hornet)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'D', 4)).to.equal('Snakebite');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(2, 'E', 1)).to.equal('Ineffective breathing');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'A', 1)).to.equal('Not dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'A', 2)).to.equal('Non-recent (≥6 hours) injuries (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'A', 3)).to.equal('Superficial bites');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'B', 1)).to.equal('Possibly dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'B', 2)).to.equal('Serious hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'B', 3)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'D', 1)).to.equal('Unconscious or arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'D', 2)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'D', 3)).to.equal('Chest or neck injury (with difficulty breathing)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'D', 4)).to.equal('Dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'D', 5)).to.equal('Large animal');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(3, 'D', 6)).to.equal('Exotic animal');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(4, 'A', 1)).to.equal('Not dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(4, 'A', 2)).to.equal('Non-recent (≥6 hours) injuries (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(4, 'B', 1)).to.equal('Possibly dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(4, 'B', 2)).to.equal('Serious hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(4, 'B', 3)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(4, 'D', 1)).to.equal('Unconscious or arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(4, 'D', 2)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(4, 'D', 3)).to.equal('Chest or neck injury (with difficulty breathing)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(4, 'D', 4)).to.equal('Multiple victims');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(5, 'A', 1)).to.equal('Non-traumatic back pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(5, 'A', 2)).to.equal('Non-recent (≥6 hours) traumatic back pain (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(5, 'C', 1)).to.equal('Suspected aortic aneurysm (tearing/ripping pain) ≥50 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(5, 'C', 2)).to.equal('Known aortic aneurysm');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(5, 'C', 3)).to.equal('Fainting or nearly fainting ≥50 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(5, 'D', 1)).to.equal('Not alert');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(6, 'C', 1)).to.equal('Abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(6, 'D', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(6, 'D', 2)).to.equal('Difficulty speaking between breaths');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(6, 'D', 3)).to.equal('Changing color');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(6, 'D', 4)).to.equal('Clammy');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(6, 'E', 1)).to.equal('Ineffective breathing');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'A', 1)).to.equal('Burns <18% body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'A', 2)).to.equal('Fire alarm (unknown situation)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'A', 3)).to.equal('Sunburn or minor burns (≤ hand size)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'B', 1)).to.equal('Blast injuries (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'B', 2)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'C', 1)).to.equal('Building fire with persons reported inside');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'C', 2)).to.equal('Difficulty breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'C', 3)).to.equal('Burns ≥18% body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'C', 4)).to.equal('Significant facial burns');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'D', 1)).to.equal('Multiple victims');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'D', 2)).to.equal('Unconscious or arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'D', 3)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'D', 4)).to.equal('Difficulty speaking between breaths');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(7, 'E', 1)).to.equal('Person on fire');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(8, 'B', 1)).to.equal('Alert without difficulty breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(8, 'C', 1)).to.equal('Alert with difficulty breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(8, 'D', 1)).to.equal('Unconscious or arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(8, 'D', 2)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(8, 'D', 3)).to.equal('Difficulty speaking between breaths');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(8, 'D', 4)).to.equal('Multiple victims');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(8, 'D', 5)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(8, 'O', 1)).to.equal('Carbon monoxide detector alarm (without priority symptoms)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'B', 1)).to.equal('Obvious death unquestionable (a through k)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'D', 1)).to.equal('Ineffective breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'D', 2)).to.equal('Obvious or expected death questionable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'E', 1)).to.equal('Not breathing at all');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'E', 2)).to.equal('Breathing uncertain (agonal)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'E', 3)).to.equal('Hanging');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'E', 4)).to.equal('Strangulation');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'E', 5)).to.equal('Suffocation');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'E', 6)).to.equal('Underwater');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(9, 'O', 1)).to.equal('Expected death unquestionable (x through z)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(10, 'A', 1)).to.equal('Breathing normally <35 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(10, 'C', 1)).to.equal('Abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(10, 'C', 2)).to.equal('Heart attack or angina history');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(10, 'C', 3)).to.equal('Cocaine');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(10, 'C', 4)).to.equal('Breathing normally ≥35 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(10, 'D', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(10, 'D', 2)).to.equal('Difficulty speaking between breaths');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(10, 'D', 3)).to.equal('Changing color');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(10, 'D', 4)).to.equal('Clammy');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(11, 'A', 1)).to.equal('Not choking now (can talk or cry, is alert and breathing normally)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(11, 'D', 1)).to.equal('Abnormal breathing (partial obstruction)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(11, 'D', 2)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(11, 'E', 1)).to.equal('Complete obstruction/ineffective breathing');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'A', 1)).to.equal('Not seizing now and effective breathing verified (known seizure disorder)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'A', 2)).to.equal('Not seizing now and effective breathing verified (seizure disorder unknown)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'A', 3)).to.equal('Not seizing now and effective breathing verified (≤6 years old, confirmed no seizure disorder)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'A', 4)).to.equal('Focal seizure (alert)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'A', 5)).to.equal('Impending seizure (aura)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'C', 1)).to.equal('Focal seizure (not alert)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'C', 2)).to.equal('Pregnancy');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'C', 3)).to.equal('Diabetic');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'C', 4)).to.equal('Not seizing now and effective breathing verified (>6 years old, confirmed no seizure disorder)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'C', 5)).to.equal('History of stroke or brain tumor');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'C', 6)).to.equal('Overdose/poisoning (ingestion)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'C', 7)).to.equal('Atypical seizure');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'D', 1)).to.equal('Not breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'D', 2)).to.equal('Continuous or multiple seizures');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'D', 3)).to.equal('Agonal/ineffective breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(12, 'D', 4)).to.equal('Effective breathing not verified, patient ≥35 years old');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(13, 'A', 1)).to.equal('Alert and behaving normally');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(13, 'C', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(13, 'C', 2)).to.equal('Abnormal behavior');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(13, 'C', 3)).to.equal('Abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(13, 'D', 1)).to.equal('Unconscious');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(14, 'A', 1)).to.equal('Alert and breathing normally (no injuries and out of water)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(14, 'B', 1)).to.equal('Alert and breathing normally (injuries or in water)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(14, 'B', 2)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(14, 'C', 1)).to.equal('Alert with abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(14, 'D', 1)).to.equal('Unconscious or arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(14, 'D', 2)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(14, 'D', 3)).to.equal('Diving or suspected neck injury');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(14, 'D', 4)).to.equal('SCUBA accident');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'C', 1)).to.equal('Alert and breathing normally');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'D', 1)).to.equal('Unconscious');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'D', 2)).to.equal('Not disconnected from power');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'D', 3)).to.equal('Power not off or hazard present');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'D', 4)).to.equal('Extreme fall (≥30 ft/10 m)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'D', 5)).to.equal('Long fall');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'D', 6)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'D', 7)).to.equal('Abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'D', 8)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(15, 'E', 1)).to.equal('Not breathing/ineffective breathing');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(16, 'A', 1)).to.equal('Moderate eye injuries');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(16, 'A', 2)).to.equal('Minor eye injuries');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(16, 'A', 3)).to.equal('Medical eye problems');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(16, 'B', 1)).to.equal('Severe eye injuries');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(16, 'D', 1)).to.equal('Not alert');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'A', 1)).to.equal('Not dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'A', 2)).to.equal('Non-recent (≥6 hours) injuries (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'A', 3)).to.equal('Public assist (no injuries and no priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'B', 1)).to.equal('Possibly dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'B', 2)).to.equal('Serious hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'B', 3)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'D', 1)).to.equal('Extreme fall (≥30 ft/10 m)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'D', 2)).to.equal('Unconscious or arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'D', 3)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'D', 4)).to.equal('Chest or neck injury (with difficulty breathing)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(17, 'D', 5)).to.equal('Long fall');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(18, 'A', 1)).to.equal('Breathing normally');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(18, 'B', 1)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(18, 'C', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(18, 'C', 2)).to.equal('Abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(18, 'C', 3)).to.equal('Speech problems');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(18, 'C', 4)).to.equal('Sudden onset of severe pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(18, 'C', 5)).to.equal('Numbness');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(18, 'C', 6)).to.equal('Paralysis');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(18, 'C', 7)).to.equal('Change in behavior (≤3 hours)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'A', 1)).to.equal('Heart rate ≥50 bpm and <130 bpm (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'A', 2)).to.equal('Chest pain <35 years old (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'C', 1)).to.equal('Firing of AICD');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'C', 2)).to.equal('Abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'C', 3)).to.equal('Chest pain ≥35 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'C', 4)).to.equal('Cardiac history');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'C', 5)).to.equal('Cocaine');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'C', 6)).to.equal('Heart rate <50 bpm or ≥130 bpm (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'C', 7)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'D', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'D', 2)).to.equal('Difficulty speaking between breaths');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'D', 3)).to.equal('Changing color');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'D', 4)).to.equal('Clammy');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(19, 'D', 5)).to.equal('Just resuscitated and/or defibrillated (external)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(20, 'A', 1)).to.equal('Alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(20, 'B', 1)).to.equal('Change in skin color');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(20, 'B', 2)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(20, 'C', 1)).to.equal('Heart attack or angina history');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(20, 'D', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(20, 'D', 2)).to.equal('Multiple victims (with priority symptoms)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'A', 1)).to.equal('Not dangerous hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'A', 2)).to.equal('Minor hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'B', 1)).to.equal('Possibly dangerous hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'B', 2)).to.equal('Serious hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'B', 3)).to.equal('Bleeding disorder');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'B', 4)).to.equal('Blood thinners');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'C', 1)).to.equal('Hemorrhage through tubes');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'C', 2)).to.equal('Hemorrhage of dialysis fistula');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'D', 1)).to.equal('Unconscious or arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'D', 2)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'D', 3)).to.equal('Dangerous hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(21, 'D', 4)).to.equal('Abnormal breathing');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'A', 1)).to.equal('No longer trapped (no injuries)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'B', 1)).to.equal('No longer trapped (unknown injuries)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'B', 2)).to.equal('Peripheral entrapment only');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'B', 3)).to.equal('Unknown status (investigation)/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'D', 1)).to.equal('Mechanical/machinery entrapment');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'D', 2)).to.equal('Trench collapse');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'D', 3)).to.equal('Structure collapse');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'D', 4)).to.equal('Confined space rescue');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'D', 5)).to.equal('Inaccessible terrain situation');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(22, 'D', 6)).to.equal('Mudslide/avalanche');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'B', 1)).to.equal('Overdose (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'C', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'C', 2)).to.equal('Abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'C', 3)).to.equal('Antidepressants (tricyclic)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'C', 4)).to.equal('Cocaine, methamphetamine (or derivatives)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'C', 5)).to.equal('Narcotics (heroin)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'C', 6)).to.equal('Acid or alkali (lye)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'C', 7)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'C', 8)).to.equal('Poison Control request for response');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'D', 1)).to.equal('Unconscious');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'D', 2)).to.equal('Changing color');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(23, 'O', 1)).to.equal('Poisoning (without priority symptoms)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'A', 1)).to.equal('1st trimester hemorrhage or miscarriage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'B', 1)).to.equal('Labor (delivery not imminent, ≥5 months/20 weeks)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'B', 2)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'C', 1)).to.equal('2nd trimester hemorrhage or miscarriage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'C', 2)).to.equal('1st trimester serious hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'C', 3)).to.equal('Baby born (no complications)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'D', 1)).to.equal('Breech or cord');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'D', 2)).to.equal('Head visible/out');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'D', 3)).to.equal('Imminent delivery (≥5 months/20 weeks)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'D', 4)).to.equal('3rd trimester hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'D', 5)).to.equal('High risk complications');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'D', 6)).to.equal('Baby born (complications with baby)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'D', 7)).to.equal('Baby born (complications with mother)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(24, 'O', 1)).to.equal('Waters broken (no contractions or presenting parts)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'A', 1)).to.equal('Non-suicidal and alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'A', 2)).to.equal('Suicidal (not threatening) and alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'B', 1)).to.equal('Serious hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'B', 2)).to.equal('Non-serious or minor hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'B', 3)).to.equal('Threatening suicide');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'B', 4)).to.equal('Jumper (threatening)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'B', 5)).to.equal('Near hanging, strangulation or suffocation (alert)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'B', 6)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'D', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(25, 'D', 2)).to.equal('Dangerous hemorrhage');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 1)).to.equal('No priority symptoms (complaint conditions 2-11 not identified)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 2)).to.equal('Blood pressure abnormality');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 3)).to.equal('Dizziness/vertigo');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 4)).to.equal('Fever/chills');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 5)).to.equal('General weakness');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 6)).to.equal('Nausea');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 7)).to.equal('New onset of immobility');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 8)).to.equal('Other pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 9)).to.equal('Transportation only');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 10)).to.equal('Unwell/ill');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'A', 11)).to.equal('Vomiting');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'B', 1)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'C', 1)).to.equal('Altered level of consciousness');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'C', 2)).to.equal('Abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'C', 3)).to.equal('Sickle cell crisis/thalassemia');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'D', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 1)).to.equal('CODE NOT IN USE');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 2)).to.equal('Boils');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 3)).to.equal('Bumps (non-traumatic)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 4)).to.equal('Can\'t sleep');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 5)).to.equal('Can\'t urinate (without abdominal pain)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 6)).to.equal('Catheter (in/out without hemorrhaging)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 7)).to.equal('Constipation');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 8)).to.equal('Cramps/spasms/joint pain (in extremities and non-traumatic)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 9)).to.equal('Cut-off ring request');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 10)).to.equal('Deafness');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 11)).to.equal('Defecation/diarrhea');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 12)).to.equal('Earache');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 13)).to.equal('Enema');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 14)).to.equal('Gout');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 15)).to.equal('Hemorrhoids/piles');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 16)).to.equal('Hepatitis');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 17)).to.equal('Hiccups');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 18)).to.equal('Itching');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 19)).to.equal('Nervous');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 20)).to.equal('Object stuck (nose, ear, vagina, rectum, penis)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 21)).to.equal('Object swallowed (without choking or difficulty breathing, can talk)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 22)).to.equal('Painful urination');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 23)).to.equal('Penis problems/pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 24)).to.equal('Rash/skin disorder (without difficulty breathing or swallowing)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 25)).to.equal('Sexually Transmitted Disease (STD)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 26)).to.equal('Sore throat (without difficulty breathing or swallowing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 27)).to.equal('Toothache (without jaw pain)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(26, 'O', 28)).to.equal('Wound infected (focal or surface)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'A', 1)).to.equal('Non-recent (≥6 hours peripheral wounds (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'B', 1)).to.equal('Non-recent (≥6 hours) single central wound');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'B', 2)).to.equal('Known single peripheral wound');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'B', 3)).to.equal('Serious hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'B', 4)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'B', 5)).to.equal('Obvious death (explosive GSW to head)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'D', 1)).to.equal('Unconscious or arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'D', 2)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'D', 3)).to.equal('Central wounds');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'D', 4)).to.equal('Multiple wounds');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(27, 'D', 5)).to.equal('Multiple victims');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'A', 1)).to.equal('Breathing normally <35 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 1)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 2)).to.equal('Abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 3)).to.equal('Sudden speech problems');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 4)).to.equal('Sudden weakness or numbness (one side)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 5)).to.equal('Sudden paralysis or facial droop (one side)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 6)).to.equal('Sudden loss of balance or coordination');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 7)).to.equal('Sudden vision problems');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 8)).to.equal('Sudden onset of severe headache');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 9)).to.equal('Stroke history');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 10)).to.equal('TIA (mini-stroke) history');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 11)).to.equal('Breathing normally ≥35 years old');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(28, 'C', 12)).to.equal('Unknown status/other codes not applicable');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'A', 1)).to.equal('1st party caller with injury to not dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'B', 1)).to.equal('Injuries');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'B', 2)).to.equal('Serious hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'B', 3)).to.equal('Other hazards');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'B', 4)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'D', 1)).to.equal('Major incident (a through f)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'D', 2)).to.equal('High mechanism (k through s)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'D', 3)).to.equal('Hazmat');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'D', 4)).to.equal('Pinned (trapped victim)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'D', 5)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(29, 'O', 1)).to.equal('No injuries (confirmed)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(30, 'A', 1)).to.equal('Not dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(30, 'A', 2)).to.equal('Non-recent (≥6 hours) injuries (without priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(30, 'B', 1)).to.equal('Possibly dangerous body area');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(30, 'B', 2)).to.equal('Serious hemorrhage');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(30, 'D', 1)).to.equal('Unconscious or arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(30, 'D', 2)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(30, 'D', 3)).to.equal('Chest or neck injury (with difficulty breathing)');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'A', 1)).to.equal('Fainting episode(s) and alert ≥35 years old (without cardiac history)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'A', 2)).to.equal('Fainting episode(s) and alert <35 years old (with cardiac history)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'A', 3)).to.equal('Fainting episode(s) and alert <35 years old (without cardiac history)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'C', 1)).to.equal('Alert with abnormal breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'C', 2)).to.equal('Fainting episode(s) and alert ≥35 years old (with cardiac history)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'C', 3)).to.equal('Females 12-50 years old with abdominal pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'D', 1)).to.equal('Unconscious - agonal/ineffective breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'D', 2)).to.equal('Unconscious - effective breathing');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'D', 3)).to.equal('Not alert');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'D', 4)).to.equal('Changing color');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(31, 'E', 1)).to.equal('Ineffective breathing');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(32, 'B', 1)).to.equal('Standing, sitting, moving or talking');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(32, 'B', 2)).to.equal('Medical alarm (alert) notifications (no patient information)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(32, 'B', 3)).to.equal('Unknown status/other codes not applicable');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(32, 'B', 4)).to.equal('Caller\'s language not understood (no interpreter in center)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(32, 'D', 1)).to.equal('Life status questionable');

        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'A', 1)).to.equal('Acuity I (no priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'A', 2)).to.equal('Acuity II (no priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'A', 3)).to.equal('Acuity III (no priority symptoms)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'C', 1)).to.equal('Not alert (acute change)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'C', 2)).to.equal('Abnormal breathing (acute onset)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'C', 3)).to.equal('Significant hemorrhage or shock');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'C', 4)).to.equal('Possible acute heart problems or MI (heart attack)');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'C', 5)).to.equal('Acute severe pain');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'C', 6)).to.equal('Emergency response requested');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'D', 1)).to.equal('Suspected cardiac or respiratory arrest');
        expect(helpers.priorityDispatch.getSubDeterminateDescription(33, 'D', 2)).to.equal('Just resuscitated and/or defibrillated (external)');
      });
    });
    describe('Split code without subDeterminate.', () => {
      it('Correctly splits priority.', () => {
        expect(helpers.priorityDispatch.split('32B').determinate).to.equal('B');
      });

      it('Correctly splits the protocol.', () => {
        expect(helpers.priorityDispatch.split('32B').protocol).to.equal('32');
      });

      it('Correctly splits the subDeterminate.', () => {
        expect(helpers.priorityDispatch.split('32B').subDeterminate).to.be.empty;
      });
    });

    describe('Split code with subDeterminate', () => {
      it('Correctly splits priority.', () => {
        expect(helpers.priorityDispatch.split('26A02').determinate).to.equal('A');
      });

      it('Correctly splits the protocol.', () => {
        expect(helpers.priorityDispatch.split('26A02').protocol).to.equal('26');
      });

      it('Correctly splits the subDeterminate.', () => {
        expect(helpers.priorityDispatch.split('26A02').subDeterminate).to.equal('02');
      });
    });

    describe('Split code with alphanumeric subDeterminate', () => {
      it('Correctly splits priority.', () => {
        expect(helpers.priorityDispatch.split('29D02l').determinate).to.equal('D');
      });

      it('Correctly splits the protocol.', () => {
        expect(helpers.priorityDispatch.split('29D02l').protocol).to.equal('29');
      });

      it('Correctly splits the subDeterminate.', () => {
        expect(helpers.priorityDispatch.split('29D02l').subDeterminate).to.equal('02l');
      });
    });
  });
});
