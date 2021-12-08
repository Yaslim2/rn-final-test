import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const FilterPicker: React.FC = () => {
  const dispatch = useDispatch();
  const selectedGame = useSelector(
    (state: RootState) => state.game.selectedGame
  );
  const avaiableGames = useSelector(
    (state: RootState) => state.game.avaiableGames
  );

  const onPickerChange = (item: string) => {};

  return (
    <Picker
      selectedValue={selectedGame?.type}
      onValueChange={onPickerChange}
      style={{
        borderRadius: 50,
        color: selectedGame?.color,
        backgroundColor: "#f4f4f4",
        elevation: 2,
      }}
    >
      {avaiableGames.map((game) => (
        <Picker.Item
          key={game.type}
          label={game.type}
          value={game.type}
          color={game.color}
        />
      ))}
    </Picker>
  );
};

export default FilterPicker;
