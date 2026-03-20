# Edusonex Blog Bot - Windows Task Scheduler Kurulum
# Calistirmak icin: powershell -ExecutionPolicy Bypass -File .\kur_zamanlama.ps1

$TaskName   = "EdusonexBlogBot"
$BatFile    = "C:\Users\eduso\Desktop\weblerim\edusonex-tum\scripts\blog_bot\guncelle.bat"

# Varsa sil (temiz kurulum)
if (Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue) {
    Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
    Write-Host "Eski gorev silindi." -ForegroundColor Yellow
}

# Aksiyon: .bat dosyasini calistir
$Action = New-ScheduledTaskAction `
    -Execute  "cmd.exe" `
    -Argument "/c `"$BatFile`""

# Tetikleyici: Her gun saat 08:00
$Trigger = New-ScheduledTaskTrigger `
    -Daily `
    -At "08:00AM"

# Ayarlar
$Settings = New-ScheduledTaskSettingsSet `
    -ExecutionTimeLimit  (New-TimeSpan -Minutes 10) `
    -RestartCount        2 `
    -RestartInterval     (New-TimeSpan -Minutes 5) `
    -StartWhenAvailable

# Gorevi kaydet
Register-ScheduledTask `
    -TaskName  $TaskName `
    -Action    $Action `
    -Trigger   $Trigger `
    -Settings  $Settings `
    -RunLevel  Limited `
    -Force

Write-Host ""
Write-Host "Gorev basariyla kuruldu!" -ForegroundColor Green
Write-Host "  Ad    : $TaskName"
Write-Host "  Zaman : Her gun 08:00"
Write-Host "  Bat   : $BatFile"
Write-Host ""
Write-Host "Simdi test etmek icin:" -ForegroundColor Cyan
Write-Host "  Start-ScheduledTask -TaskName '$TaskName'"
Write-Host ""
Write-Host "Kaldirmak icin:" -ForegroundColor Cyan
Write-Host "  Unregister-ScheduledTask -TaskName '$TaskName' -Confirm:`$false"
