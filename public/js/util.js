/* ヘッダー部分を共通化する */
function loadHeadbar() {
    axios.get('common/headbar.html')
        .then(response => {
            const headerDiv = document.getElementById('headbar');
            headerDiv.innerHTML = response.data;
        })
        .catch(error => {
            console.error('Error loading headbar:', error);
        });
}

/* サイドバー部分を共通化する */
function loadSidebar() {
    axios.get('common/sidebar.html')
        .then(response => {
            const headerDiv = document.getElementById('sidebar');
            headerDiv.innerHTML = response.data;
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });
}

/* フッター部分を共通化する */
function loadFootbar() {
    axios.get('common/footbar.html')
        .then(response => {
            const headerDiv = document.getElementById('footbar');
            headerDiv.innerHTML = response.data;
        })
        .catch(error => {
            console.error('Error loading footbar:', error);
        });
}

// ページの読み込みが完了したらヘッダーを読み込む
document.addEventListener('DOMContentLoaded', loadHeadbar);
document.addEventListener('DOMContentLoaded', loadSidebar);
document.addEventListener('DOMContentLoaded', loadFootbar);