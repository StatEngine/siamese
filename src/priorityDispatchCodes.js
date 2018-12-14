const codes = {
  1: {
    description: 'Abdominal Pain/Problems',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Abdominal pain' }
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Suspected aortic aneurysm (tearing/ripping pain) ≥50 years old' },
          2: { description: 'Known aortic aneurysm' },
          3: { description: 'Fainting or near fainting ≥50 years old' },
          4: { description: 'Females with fainting or near fainting 12-50 years old' },
          5: { description: 'Males with pain above navel ≥35 years old' },
          6: { description: 'Females with pain above navel ≥ 45 years old' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not alert' },
        }
      }
    }
  },
  2: {
      description: 'Allergies (Reactions)/Envenomations (Stings/Bites)',
      priorities: {
        A: {
          subdeterminants: {
            1: { description: 'No difficulty breathing or swallowing (rash, hives or itching may be present)' },
            2: { description: 'Spider bite' }
          }
        },
        B: {
          subdeterminants: {
            1: { description: 'Unknown status/other codes not applicable' },
          }
        },
        C: {
          subdeterminants: {
            1: { description: 'Difficulty breathing or swallowing' },
            2: { description: 'History of severe allergic reaction' },
          }
        },
        D: {
          subdeterminants: {
            1: { description: 'Not alert' },
            2: { description: 'Difficulty speaking between breaths' },
            3: { description: 'Swarming attack (bee, wasp, hornet)' },
            4: { description: 'Snakebite' },
          }
        },
        E: {
          subdeterminants: {
            1: { description: 'Ineffective breathing' },
          }
        }
      }
    },
  3: {
    description: 'Animal Bites/Attacks',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Not dangerous body area' },
          2: { description: 'Non-recent (≥6 hours) injuries (without priority symptoms)' },
          3: { description: 'Superficial bites' }
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Possibly dangerous body area' },
          2: { description: 'Serious hemorrhage' },
          3: { description: 'Unknown status/other codes not applicable' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Difficulty breathing or swallowing' },
          2: { description: 'History of severe allergic reaction' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious or arrest' },
          2: { description: 'Not alert' },
          3: { description: 'Chest or neck injury (with difficulty breathing)' },
          4: { description: 'Dangerous body area' },
          5: { description: 'Large animal' },
          6: { description: 'Exotic animal' },
          7: { description: 'Attack of multiple animals' },
        }
      },
    }
  },
  4: {
    description: 'Assault/Sexual Assault',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Not dangerous body area' },
          2: { description: 'Non-recent (≥6 hours) injuries (without priority symptoms)' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Possibly dangerous body area' },
          2: { description: 'Serious hemorrhage' },
          3: { description: 'Unknown status/other codes not applicable' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious or arrest' },
          2: { description: 'Not alert' },
          3: { description: 'Chest or neck injury (with difficulty breathing)' },
          4: { description: 'Multiple victims' },
        }
      },
    }
  },
  5: {
    description: 'Back Pain (Non-Traumatic or Non-Recent Trauma)',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Non-traumatic back pain' },
          2: { description: 'Non-recent (≥6 hours) traumatic back pain (without priority symptoms)' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Suspected aortic aneurysm (tearing/ripping pain) ≥50 years old' },
          2: { description: 'Known aortic aneurysm' },
          3: { description: 'Fainting or nearly fainting ≥50 years old' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not alert' },
        }
      },
    }
  },
  6: {
    description: 'Breathing Problems',
    priorities: {
      C: {
        subdeterminants: {
          1: { description: 'Abnormal breathing' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not alert' },
          2: { description: 'Difficulty speaking between breaths' },
          3: { description: 'Changing color' },
          4: { description: 'Clammy' },
        }
      },
      E: {
        subdeterminants: {
          1: { description: 'Ineffective breathing' },
        }
      },
    }
  },
  7: {
    description: 'Burns (Scalds)/Explosion (Blast)',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Burns <18% body area' },
          2: { description: 'Fire alarm (unknown situation)' },
          3: { description: 'Sunburn or minor burns (≤ hand size)' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Blast injuries (without priority symptoms)' },
          2: { description: 'Unknown status/other codes not applicable' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Building fire with persons reported inside' },
          2: { description: 'Difficulty breathing' },
          3: { description: 'Burns ≥18% body area' },
          4: { description: 'Significant facial burns' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Multiple victims' },
          2: { description: 'Unconscious or arrest' },
          3: { description: 'Not alert' },
          4: { description: 'Difficulty speaking between breaths' },
        }
      },
      E: {
        subdeterminants: {
          1: { description: 'Person on fire' },
        }
      },
    }
  },
  8: {
    description: 'Carbon Monoxide/Inhalation/HAZMAT/CBRN',
    priorities: {
      B: {
        subdeterminants: {
          1: { description: 'Alert without difficulty breathing' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Alert with difficulty breathing' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious or arrest' },
          2: { description: 'Not alert' },
          3: { description: 'Difficulty speaking between breaths' },
          4: { description: 'Multiple victims' },
          5: { description: 'Unknown status/other codes not applicable' },
        }
      },
      O: {
        subdeterminants: {
          1: { description: 'Carbon monoxide detector alarm (without priority symptoms)' },
        }
      },
    }
  },
  9: {
    description: 'Cardiac or Respiratory Arrest/Death',
    priorities: {
      B: {
        subdeterminants: {
          1: { description: 'Obvious death unquestionable (a through k)' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Ineffective breathing' },
          2: { description: 'Obvious or expected death questionable' },
        }
      },
      E: {
        subdeterminants: {
          1: { description: 'Not breathing at all' },
          2: { description: 'Breathing uncertain (agonal)' },
          3: { description: 'Hanging' },
          4: { description: 'Strangulation' },
          5: { description: 'Suffocation' },
          6: { description: 'Underwater' },
        }
      },
      O: {
        subdeterminants: {
          1: { description: 'Expected death unquestionable (x through z)' },
        }
      },
    }
  },
  10: {
    description: 'Chest Pain (Non-Traumatic)',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Breathing normally <35 years old' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Abnormal breathing' },
          2: { description: 'Heart attack or angina history' },
          3: { description: 'Cocaine' },
          4: { description: 'Breathing normally ≥35 years old' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not alert' },
          2: { description: 'Difficulty speaking between breaths' },
          3: { description: 'Changing color' },
          4: { description: 'Clammy' },
        }
      },
    }
  },
  11: {
    description: 'Choking',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Not choking now (can talk or cry, is alert and breathing normally)' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Abnormal breathing (partial obstruction)' },
          2: { description: 'Not alert' },
        }
      },
      E: {
        subdeterminants: {
          1: { description: 'Complete obstruction/ineffective breathing' },
        }
      },
    }
  },
  12: {
    description: 'Convulsions/Seizures',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Not seizing now and effective breathing verified (known seizure disorder)' },
          2: { description: 'Not seizing now and effective breathing verified (seizure disorder unknown)' },
          3: { description: 'Not seizing now and effective breathing verified (≤6 years old, confirmed no seizure disorder)' },
          4: { description: 'Focal seizure (alert)' },
          5: { description: 'Impending seizure (aura)' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Effective breathing not verified <35 years old' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Focal seizure (not alert)' },
          2: { description: 'Pregnancy' },
          3: { description: 'Diabetic' },
          4: { description: 'Not seizing now and effective breathing verified (>6 years old, confirmed no seizure disorder)' },
          5: { description: 'History of stroke or brain tumor' },
          6: { description: 'Overdose/poisoning (ingestion)' },
          7: { description: 'Atypical seizure' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not breathing' },
          2: { description: 'Continuous or multiple seizures' },
          3: { description: 'Agonal/ineffective breathing' },
          4: { description: 'Effective breathing not verified, patient ≥35 years old' },
        }
      },
    }
  },
  13: {
    description: 'Diabetic Problems',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Alert and behaving normally' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Not alert' },
          2: { description: 'Abnormal behavior' },
          3: { description: 'Abnormal breathing' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious' },
        }
      },
    }
  },
  14: {
    description: 'Drowning (near)/Diving/SCUBA Accident',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Alert and breathing normally (no injuries and out of water)' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Alert and breathing normally (injuries or in water)' },
          2: { description: 'Unknown status/other codes not applicable' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Alert with abnormal breathing' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious or arrest' },
          2: { description: 'Not alert' },
          3: { description: 'Diving or suspected neck injury' },
          4: { description: 'SCUBA accident' },
        }
      },
    }
  },
  15: {
    description: 'Electrocution/Lightning',
    priorities: {
      C: {
        subdeterminants: {
          1: { description: 'Alert and breathing normally' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious' },
          2: { description: 'Not disconnected from power' },
          3: { description: 'Power not off or hazard present' },
          4: { description: 'Extreme fall (≥30 ft/10 m)' },
          5: { description: 'Long fall' },
          6: { description: 'Not alert' },
          7: { description: 'Abnormal breathing' },
          8: { description: 'Unknown status/other codes not applicable' },
        }
      },
      E: {
        subdeterminants: {
          1: { description: 'Not breathing/ineffective breathing' },
        }
      },
    }
  },
  16: {
    description: 'Eye Problems/Injuries',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Moderate eye injuries' },
          2: { description: 'Minor eye injuries' },
          3: { description: 'Medical eye problems' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Severe eye injuries' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not alert' },
        }
      },
    }
  },
  17: {
    description: 'Falls',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Not dangerous body area' },
          2: { description: 'Non-recent (≥6 hours) injuries (without priority symptoms)' },
          3: { description: 'Public assist (no injuries and no priority symptoms)' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Possibly dangerous body area' },
          2: { description: 'Serious hemorrhage' },
          3: { description: 'Unknown status/other codes not applicable' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Extreme fall (≥30 ft/10 m)' },
          2: { description: 'Unconscious or arrest' },
          3: { description: 'Not alert' },
          4: { description: 'Chest or neck injury (with difficulty breathing)' },
          5: { description: 'Long fall' },
        }
      },
    }
  },
  18: {
    description: 'Headache',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Breathing normally' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Unknown status/other codes not applicable' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Not alert' },
          2: { description: 'Abnormal breathing' },
          3: { description: 'Speech problems' },
          4: { description: 'Sudden onset of severe pain' },
          5: { description: 'Numbness' },
          6: { description: 'Paralysis' },
          7: { description: 'Change in behavior (≤3 hours)' },

        }
      },
    }
  },
  19: {
    description: 'Heart Problems/AICD',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Heart rate ≥50 bpm and <130 bpm (without priority symptoms)' },
          2: { description: 'Chest pain <35 years old (without priority symptoms)' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Firing of AICD' },
          2: { description: 'Abnormal breathing' },
          3: { description: 'Chest pain ≥35 years old' },
          4: { description: 'Cardiac history' },
          5: { description: 'Cocaine' },
          6: { description: 'Heart rate <50 bpm or ≥130 bpm (without priority symptoms)' },
          7: { description: 'Unknown status/other codes not applicable' },

        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not alert' },
          2: { description: 'Difficulty speaking between breaths' },
          3: { description: 'Changing color' },
          4: { description: 'Clammy' },
          5: { description: 'Just resuscitated and/or defibrillated (external)' },
        }
      },
    }
  },
  20: {
    description: 'Heat/Cold Exposure',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Alert' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Change in skin color' },
          2: { description: 'Unknown status/other codes not applicable' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Heart attack or angina history' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not alert' },
          2: { description: 'Multiple victims (with priority symptoms)' },
        }
      },
    }
  },
  21: {
    description: 'Hemorrhage/Laceration',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Not dangerous hemorrhage' },
          2: { description: 'Minor hemorrhage' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Possibly dangerous hemorrhage' },
          2: { description: 'Serious hemorrhage' },
          3: { description: 'Bleeding disorder' },
          4: { description: 'Blood thinners' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Hemorrhage through tubes' },
          2: { description: 'Hemorrhage of dialysis fistula' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious or arrest' },
          2: { description: 'Not alert' },
          3: { description: 'Dangerous hemorrhage' },
          4: { description: 'Abnormal breathing' },
        }
      },
    }
  },
  22: {
    description: 'Inaccessible Incident/Other Entrapments (Non-Vehicle)',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'No longer trapped (no injuries)' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'No longer trapped (unknown injuries)' },
          2: { description: 'Peripheral entrapment only' },
          3: { description: 'Unknown status (investigation)/other codes not applicable' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Mechanical/machinery entrapment' },
          2: { description: 'Trench collapse' },
          3: { description: 'Structure collapse' },
          4: { description: 'Confined space rescue' },
          5: { description: 'Inaccessible terrain situation' },
          6: { description: 'Mudslide/avalanche' },
        }
      },
    }
  },
  23: {
    description: 'Overdose/Poisoning (Ingestion)',
    priorities: {
      B: {
        subdeterminants: {
          1: { description: 'Overdose (without priority symptoms)' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Not alert' },
          2: { description: 'Abnormal breathing' },
          3: { description: 'Antidepressants (tricyclic)' },
          4: { description: 'Cocaine, methamphetamine (or derivatives)' },
          5: { description: 'Narcotics (heroin)' },
          6: { description: 'Acid or alkali (lye)' },
          7: { description: 'Unknown status/other codes not applicable' },
          8: { description: 'Poison Control request for response' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious' },
          2: { description: 'Changing color' },
        }
      },
      O: {
        subdeterminants: {
          1: { description: 'Poisoning (without priority symptoms)' },
        }
      },
    }
  },
  24: {
    description: 'Pregnancy/Childbirth/Miscarriage',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: '1st trimester hemorrhage or miscarriage' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Labor (delivery not imminent, ≥5 months/20 weeks)' },
          2: { description: 'Unknown status/other codes not applicable' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: '2nd trimester hemorrhage or miscarriage' },
          2: { description: '1st trimester serious hemorrhage' },
          3: { description: 'Baby born (no complications)' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Breech or cord' },
          2: { description: 'Head visible/out' },
          3: { description: 'Imminent delivery (≥5 months/20 weeks)' },
          4: { description: '3rd trimester hemorrhage' },
          5: { description: 'High risk complications' },
          6: { description: 'Baby born (complications with baby)' },
          7: { description: 'Baby born (complications with mother)' },
        }
      },
      O: {
        subdeterminants: {
          1: { description: 'Waters broken (no contractions or presenting parts)' },
        }
      },
    }
  },
  25: {
    description: 'Psychiatric/Abnormal Behavior/Suicide Attempt',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Non-suicidal and alert' },
          2: { description: 'Suicidal (not threatening) and alert' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Serious hemorrhage' },
          2: { description: 'Non-serious or minor hemorrhage' },
          3: { description: 'Threatening suicide' },
          4: { description: 'Jumper (threatening)' },
          5: { description: 'Near hanging, strangulation or suffocation (alert)' },
          6: { description: 'Unknown status/other codes not applicable' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not alert' },
          2: { description: 'Dangerous hemorrhage' },
        }
      },
    }
  },
  26: {
    description: 'Sick Person (Specific Diagnosis)',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'No priority symptoms (complaint conditions 2-11 not identified)' },
          2: { description: 'Blood pressure abnormality' },
          3: { description: 'Dizziness/vertigo' },
          4: { description: 'Fever/chills' },
          5: { description: 'General weakness' },
          6: { description: 'Nausea' },
          7: { description: 'New onset of immobility' },
          8: { description: 'Other pain' },
          9: { description: 'Transportation only' },
          10: { description: 'Unwell/ill' },
          11: { description: 'Vomiting' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Unknown status/other codes not applicable' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Altered level of consciousness' },
          2: { description: 'Abnormal breathing' },
          3: { description: 'Sickle cell crisis/thalassemia' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Not alert' },
        }
      },
      O: {
        subdeterminants: {
          1: { description: 'CODE NOT IN USE' },
          2: { description: 'Boils' },
          3: { description: 'Bumps (non-traumatic)' },
          4: { description: 'Can\'t sleep' },
          5: { description: 'Can\'t urinate (without abdominal pain)' },
          6: { description: 'Catheter (in/out without hemorrhaging)' },
          7: { description: 'Constipation' },
          8: { description: 'Cramps/spasms/joint pain (in extremities and non-traumatic)' },
          9: { description: 'Cut-off ring request' },
          10: { description: 'Deafness' },
          11: { description: 'Defecation/diarrhea' },
          12: { description: 'Earache' },
          13: { description: 'Enema' },
          14: { description: 'Gout' },
          15: { description: 'Hemorrhoids/piles' },
          16: { description: 'Hepatitis' },
          17: { description: 'Hiccups' },
          18: { description: 'Itching' },
          19: { description: 'Nervous' },
          20: { description: 'Object stuck (nose, ear, vagina, rectum, penis)' },
          21: { description: 'Object swallowed (without choking or difficulty breathing, can talk)' },
          22: { description: 'Painful urination' },
          23: { description: 'Penis problems/pain' },
          24: { description: 'Rash/skin disorder (without difficulty breathing or swallowing)' },
          25: { description: 'Sexually Transmitted Disease (STD)' },
          26: { description: 'Sore throat (without difficulty breathing or swallowing' },
          27: { description: 'Toothache (without jaw pain)' },
          28: { description: 'Wound infected (focal or surface)' },
        }
      },
    }
  },
  27: {
    description: 'Stab/Gunshot/Penetrating Trauma',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Non-recent (≥6 hours peripheral wounds (without priority symptoms)' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Non-recent (≥6 hours) single central wound' },
          2: { description: 'Known single peripheral wound' },
          3: { description: 'Serious hemorrhage' },
          4: { description: 'Unknown status/other codes not applicable' },
          5: { description: 'Obvious death (explosive GSW to head)' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious or arrest' },
          2: { description: 'Not alert' },
          3: { description: 'Central wounds' },
          4: { description: 'Multiple wounds' },
          5: { description: 'Multiple victims' },
        }
      },
    }
  },
  28: {
    description: 'Stroke (CVA)/Transient Ischemic Attack (TIA)',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Breathing normally <35 years old' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Not alert' },
          2: { description: 'Abnormal breathing' },
          3: { description: 'Sudden speech problems' },
          4: { description: 'Sudden weakness or numbness (one side)' },
          5: { description: 'Sudden paralysis or facial droop (one side)' },
          6: { description: 'Sudden loss of balance or coordination' },
          7: { description: 'Sudden vision problems' },
          8: { description: 'Sudden onset of severe headache' },
          9: { description: 'Stroke history' },
          10: { description: 'TIA (mini-stroke) history' },
          11: { description: 'Breathing normally ≥35 years old' },
          12: { description: 'Unknown status/other codes not applicable' },
        }
      },
    }
  },
  29: {
    description: 'Traffic/Transportation Incidents',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: '1st party caller with injury to not dangerous body area' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Injuries' },
          2: { description: 'Serious hemorrhage' },
          3: { description: 'Other hazards' },
          4: { description: 'Unknown status/other codes not applicable' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Major incident (a through f)' },
          2: { description: 'High mechanism (k through s)' },
          3: { description: 'Hazmat' },
          4: { description: 'Pinned (trapped victim)' },
          5: { description: 'Not alert' },
        }
      },
      O: {
        subdeterminants: {
          1: { description: 'No injuries (confirmed)' },
        }
      },
    }
  },
  30: {
    description: 'Traumatic Injuries (Specific)',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Not dangerous body area' },
          2: { description: 'Non-recent (≥6 hours) injuries (without priority symptoms)' },
        }
      },
      B: {
        subdeterminants: {
          1: { description: 'Possibly dangerous body area' },
          2: { description: 'Serious hemorrhage' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious or arrest' },
          2: { description: 'Not alert' },
          3: { description: 'Chest or neck injury (with difficulty breathing)' },
        }
      },
    }
  },
  31: {
    description: 'Unconscious/Fainting (Near)',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Fainting episode(s) and alert ≥35 years old (without cardiac history)' },
          2: { description: 'Fainting episode(s) and alert <35 years old (with cardiac history)' },
          3: { description: 'Fainting episode(s) and alert <35 years old (without cardiac history)' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Alert with abnormal breathing' },
          2: { description: 'Fainting episode(s) and alert ≥35 years old (with cardiac history)' },
          3: { description: 'Females 12-50 years old with abdominal pain' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Unconscious - agonal/ineffective breathing' },
          2: { description: 'Unconscious - effective breathing' },
          3: { description: 'Not alert' },
          4: { description: 'Changing color' },
        }
      },
      E: {
        subdeterminants: {
          1: { description: 'Ineffective breathing' },
        }
      },
    }
  },
  32: {
    description: 'Unknown Problem (Man Down)',
    priorities: {
      B: {
        subdeterminants: {
          1: { description: 'Standing, sitting, moving or talking' },
          2: { description: 'Medical alarm (alert) notifications (no patient information)' },
          3: { description: 'Unknown status/other codes not applicable' },
          4: { description: 'Caller\'s language not understood (no interpreter in center)' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Life status questionable' },
        }
      },
    }
  },
  33: {
    description: 'Transfer/Interfacility/Palliative Care',
    priorities: {
      A: {
        subdeterminants: {
          1: { description: 'Acuity I (no priority symptoms)' },
          2: { description: 'Acuity II (no priority symptoms)' },
          3: { description: 'Acuity III (no priority symptoms)' },
        }
      },
      C: {
        subdeterminants: {
          1: { description: 'Not alert (acute change)' },
          2: { description: 'Abnormal breathing (acute onset)' },
          3: { description: 'Significant hemorrhage or shock' },
          4: { description: 'Possible acute heart problems or MI (heart attack)' },
          5: { description: 'Acute severe pain' },
          6: { description: 'Emergency response requested' },
        }
      },
      D: {
        subdeterminants: {
          1: { description: 'Suspected cardiac or respiratory arrest' },
          2: { description: 'Just resuscitated and/or defibrillated (external)' },
        }
      }
    }
  }
}
export default codes ;