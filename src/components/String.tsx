import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { note } from "@tonaljs/tonal";
import { midiToNoteName } from "@tonaljs/midi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { playSound } from "../helpers/audio";
import { sharpen, flatten, select, RootState } from "../helpers/state";
import {
  colors,
  StyledString,
  Sharpen,
  Flatten,
  NotePosition,
} from "../helpers/styles";

type StringProps = {
  index: number;
  tuning: number;
};

const String: React.FC<StringProps> = ({ index, tuning }: StringProps) => {
  const dispatch = useDispatch();
  const { selected, isSharps, hasSound } = useSelector((state: RootState) => {
    return {
      selected: state.selected,
      isSharps: state.settings.isSharps,
      hasSound: state.settings.hasSound,
    };
  });

  const frets = Array.from({ length: 26 }, (_v, i) => i);
  const tones = frets.map((fret) =>
    midiToNoteName(tuning + fret, { sharps: isSharps })
  );
  const notes = tones.map((tone, index) => {
    const isSelected = selected.includes(note(tone).chroma as number);

    return (
      <NotePosition
        key={index}
        isSelected={isSelected}
        onClick={(): void => {
          dispatch(select(tone));
          hasSound && playSound(tone);
        }}
        data-test={isSelected ? "selected" : "not-selected"}
      >
        <svg width="40px" height="40px">
          <line
            x1="20px"
            y1="0px"
            x2="20px"
            y2="10.4px"
            stroke={colors.grey}
            strokeWidth="1.6px"
          />
          <line
            x1="20px"
            y1="28px"
            x2="20px"
            y2="40px"
            stroke={colors.grey}
            strokeWidth="1.6px"
          />
        </svg>
        {note(tone).pc}
      </NotePosition>
    );
  });
  return (
    <StyledString>
      <Sharpen
        onClick={(): { type: string; payload: number } =>
          dispatch(sharpen(index))
        }
        data-test={`sharpen-${index + 1}`}
      >
        <FiChevronUp className="icon" />
      </Sharpen>
      <Flatten
        onClick={(): { type: string; payload: number } =>
          dispatch(flatten(index))
        }
        data-test={`flatten-${index + 1}`}
      >
        <FiChevronDown className="icon" />
      </Flatten>
      <div data-test={`string-${index + 1}`}>{notes}</div>
    </StyledString>
  );
};

export default String;
