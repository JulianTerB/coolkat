<?php
header('Content-Type: application/json');

// Map instellen
$dir = __DIR__ . '/posts';
$files = array_diff(scandir($dir), ['..', '.']);

// Filter HTML-bestanden
$pages = [];
foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) === 'html') {
        $pages[] = $file;
    }
}

// Sorteer numeriek
natcasesort($pages);

// Return JSON
echo json_encode(array_values($pages));
