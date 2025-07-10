Get-Content .\migration.txt | Where-Object { $_.Trim() -ne "" } | Select-Object -Unique | ForEach-Object {
    $sassFile = $_.Trim()
    Write-Host "Migrating $sassFile"
    sass-migrator module --migrate-deps $sassFile
}