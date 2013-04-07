import System.IO

main = do
  inputFile <- readFile "cities"
  writeFile "cities2" (unlines $ map (++ "\",") (map ('"':) (lines inputFile)))
  --print (unlines $ map (++ "\",") (map ('"':) (lines inputFile)))

