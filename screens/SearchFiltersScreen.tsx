import { useNavigation } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import {
  Button,
  HStack,
  VStack,
  useColorModeValue,
  TitleThree,
  Body,
  Badge,
  Pressable,
  VerticalCard,
  Image,
  Subhead,
  Box,
  ZStack,
} from "@spirokit/core";
import React, { memo, useState } from "react";
import { ScrollView } from "react-native";
import { TrashIcon } from "react-native-heroicons/outline";
import BackButton from "../components/BackButton";
import {
  GlobalParamList,
  ScreenNavigationProp,
} from "../navigation/GlobalParamList";

export type Filter = { value: string; type: string };

const orderByFilters: Filter[] = [
  {
    type: "OrderBy",
    value: "Traveler ranking",
  },
  {
    type: "OrderBy",
    value: "Relevance",
  },
];

const priceFilters: Filter[] = [
  {
    type: "Price",
    value: "$",
  },
  {
    type: "Price",
    value: "$$",
  },
  {
    type: "Price",
    value: "$$$",
  },
];

const categoryFilters: CategoryFilter[] = [
  {
    type: "Category",
    value: "Shoes",
    assetUrl: "https://i.imgur.com/BavNTR3.png",
  },
  {
    type: "Category",
    value: "Outerwear",
    assetUrl: "https://i.imgur.com/Dz8ZcLL.png",
  },
  {
    type: "Category",
    value: "Jeans",
    assetUrl: "https://i.imgur.com/qoyCPRL.png",
  },
  {
    type: "Category",
    value: "Dresses",
    assetUrl: "https://i.imgur.com/QUNzsjJ.png",
  },
];

type SearchFilterProps = StackScreenProps<GlobalParamList, "SearchFilters">;

const SearchFilters = (props: SearchFilterProps) => {
  const [activeFilters, setActiveFilters] = useState<Filter[]>(
    props.route.params?.activeFilters ?? []
  );
  const navigation = useNavigation<ScreenNavigationProp>();

  const onFilterSelected = (filter: Filter) => {
    const exists = activeFilters.find(
      (f) => f.type === filter.type && f.value === filter.value
    );

    if (exists) {
      setActiveFilters(
        activeFilters.filter(
          (i) => i.value !== filter.value && i.type !== filter.type
        )
      );
      return;
    }

    const newFilters = activeFilters.filter((i) => i.type !== filter.type);
    newFilters.push(filter);
    setActiveFilters(newFilters);
  };

  const onClearFilters = () => {
    setActiveFilters([]);
  };

  const styles = {
    clearFiltersIconColor: useColorModeValue("primary.500", "primary.300"),
  };

  return (
    <VStack
      height="full"
      backgroundColor={useColorModeValue("primaryGray.100", "primaryDark.0")}
    >
      <ScrollView>
        <VStack space={4} padding={4} width="full">
          <HStack space={4} alignItems="center" flex={1}>
            <BackButton></BackButton>
            <TitleThree flex={1} fontWeight="semibold">
              Filters
            </TitleThree>
            <Button
              width="auto"
              variant="tertiary"
              textColor={styles.clearFiltersIconColor}
              size="sm"
              onPress={() => onClearFilters()}
              IconLeftComponent={TrashIcon}
            ></Button>
          </HStack>

          <FilterCriteria
            title="Order by"
            data={orderByFilters}
            activeFilters={activeFilters}
            onFilterSelected={(filter) => onFilterSelected(filter)}
          ></FilterCriteria>
          <FilterCriteria
            title="Price"
            activeFilters={activeFilters}
            data={priceFilters}
            onFilterSelected={(filter) => onFilterSelected(filter)}
          ></FilterCriteria>
          <Categories
            activeFilters={activeFilters}
            data={categoryFilters}
            onFilterSelected={(filter) => onFilterSelected(filter)}
          ></Categories>
        </VStack>
      </ScrollView>
      <Box safeAreaBottom padding={4} width="full" justifyContent="flex-end">
        <Button
          onPress={() =>
            navigation.navigate("Search", {
              activeFilters: activeFilters,
            })
          }
        >
          Apply filters
        </Button>
      </Box>
    </VStack>
  );
};

const FilterCriteria = (props: {
  activeFilters: Filter[];
  title: string;
  data: Filter[];
  onFilterSelected: (filter: Filter) => void;
}) => {
  const { title, data, onFilterSelected, activeFilters } = props;

  return (
    <VStack space={2}>
      <Body>{title}</Body>
      <HStack space={2} width="full" flexWrap="wrap">
        {data.map((item, index) => (
          <Pressable
            key={`${item.type}-${index}`}
            onPress={() => onFilterSelected(item)}
          >
            <Badge
              colorMode={
                activeFilters.find(
                  (f) => f.value === item.value && f.type === item.type // This applies conditional styles based on the state of the filter
                )
                  ? "light"
                  : "dark"
              }
              marginBottom={2}
              key={`${item.value} ${item.type}`}
            >
              {item.value}
            </Badge>
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
};

type CategoryFilter = Filter & { assetUrl: string };
const Categories = memo(
  (props: {
    activeFilters: Filter[];
    data: CategoryFilter[];
    onFilterSelected: (filter: Filter) => void;
  }) => {
    const { data, activeFilters, onFilterSelected } = props;

    return (
      <VStack space={2}>
        <Body>Category</Body>
        <VStack space={2}>
          {data.map((c, index) => (
            <Pressable
              key={`${c.type}-${index}`}
              onPress={() => {
                onFilterSelected({
                  type: c.type,
                  value: c.value,
                });
              }}
            >
              <ZStack flex={1}>
                <VerticalCard
                  TitleComponent={<Subhead>{c.value}</Subhead>}
                  AssetComponent={
                    <Image alt={c.value} source={{ uri: c.assetUrl }}></Image>
                  }
                ></VerticalCard>
                <Box
                  height="full"
                  width="full"
                  backgroundColor={
                    activeFilters.find(
                      (af) => af.type === c.type && af.value === c.value
                    ) !== undefined
                      ? "primary.500:alpha.20"
                      : "transparent"
                  }
                  flex={1}
                ></Box>
              </ZStack>
            </Pressable>
          ))}
        </VStack>
      </VStack>
    );
  }
);

export default SearchFilters;
