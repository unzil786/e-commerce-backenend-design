$port = 3000
$folder = Split-Path -Parent $MyInvocation.MyCommand.Path
$mime = @{
    '.html'='text/html; charset=utf-8'; '.css'='text/css'; '.js'='application/javascript';
    '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.ico'='image/x-icon'; '.webp'='image/webp'
}
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Design by Sole running at http://localhost:$port"
Start-Process "http://localhost:$port"
while ($listener.IsListening) {
    try {
        $ctx = $listener.GetContext()
        $url = $ctx.Request.Url.LocalPath
        if ($url -eq '/') { $url = '/index.html' }
        $file = Join-Path $folder ($url.TrimStart('/'))
        if (Test-Path $file -PathType Leaf) {
            $ext = [IO.Path]::GetExtension($file).ToLower()
            $type = if ($mime[$ext]) { $mime[$ext] } else { 'application/octet-stream' }
            $buf = [IO.File]::ReadAllBytes($file)
            $ctx.Response.ContentType = $type
            $ctx.Response.ContentLength64 = $buf.Length
            $ctx.Response.OutputStream.Write($buf, 0, $buf.Length)
        } else {
            $ctx.Response.StatusCode = 404
        }
        $ctx.Response.OutputStream.Close()
    } catch {}
}

