from hypothesis import given, settings
from hypothesis.strategies import integers, lists
from statistics import median

@given(lists(integers(), min_size=1))
@settings(max_examples=500)
def test_python_median(input_list):
    output_median = median(input_list)
    #print(f'{input_list} -> {output_median}')
    if len(input_list) % 2 == 1:
        assert output_median in input_list
    lower_or_eq = [val for val in input_list if val <= output_median]
    higher_or_eq = [val for val in input_list if val >= output_median]
    assert len(lower_or_eq) >= len(input_list) // 2
    assert len(higher_or_eq) >= len(input_list) // 2

if __name__ == "__main__":
    test_python_median()
