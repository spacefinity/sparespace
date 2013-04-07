import System.IO

main = do
  inputFile <- readFile "city-list.txt"
  writeFile "city-list-for-array.txt" (unlines $ map (++ "\",") (map ('"':) (lines inputFile)))
  --print (unlines $ map (++ "\",") (map ('"':) (lines inputFile)))

