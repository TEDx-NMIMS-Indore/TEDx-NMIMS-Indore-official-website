

$a = Get-ChildItem public/images/NMIMS -Recurse -Force

forEach ($f in $a) {
    $fileType = $f.Name.split(".")
    if (($fileType -eq "jpeg") -or ($fileType -eq "png") -or ($fileType -eq "jpg")) {
        Write-Output "`nConverting $($f.DirectoryName +"\"+ $f.Name) to webp... named $($($f.DirectoryName+"\" + $($f.Name)) -replace $fileType[1], "webp")";
        # Write-Output ($f.DirectoryName)
        C:\WEBPConverter\libwebp-0.4.1-windows-x64\bin\cwebp.exe $($f.DirectoryName + "\" + $f.Name) -q 80 -o $($($f.DirectoryName + "\" + $($f.Name)) -replace $fileType[1], "webp")
    }
}