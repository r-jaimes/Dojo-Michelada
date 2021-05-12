def find_median_sorted_arrays(nums1, nums2)
  return find_median nums1 if nums2.size == 0
  return find_median nums2 if nums1.size == 0
  find_median nums1[0] <= nums2[0] ? merge_arrays(nums1, nums2) : merge_arrays(nums2, nums1)
end

def merge_arrays(small, large)
  small.each_with_index do |x,i|
    break if large.size == 0

    if large[0] && large[0] < x
      small.insert(i, large.shift)
      next
    end
  end
  small + large
end

def find_median(array)
  puts "calculating median of #{array}"
  if(array.size%2 ==0)
   ( array[array.size/2] + array[array.size/2 - 1] ) / 2.0
  else
    array[array.size/2]
  end
end
