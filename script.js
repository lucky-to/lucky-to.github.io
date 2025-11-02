// 关心话库
const caringMessages = [
    "今天也要开心哦~",
    "记得多喝水💧",
    "不要太累啦",
    "要好好照顾自己",
    "今天也要加油呀！",
    "你真的很棒！",
    "记得按时吃饭🍚",
    "累了就休息一下",
    "今天也要微笑😊",
    "你值得被温柔对待",
    "记得早点睡觉💤",
    "要相信自己哦",
    "今天也要快乐呀",
    "记得照顾好自己",
    "你真的很优秀",
    "别给自己太大压力",
    "今天也要努力",
    "记得多微笑",
    "你是最棒的",
    "记得保持好心情",
    "今天也要加油",
    "记得多运动",
    "要好好爱自己",
    "今天也要开心",
    "记得放松心情",
    "你真的很不错",
    "今天也要幸福",
    "记得保持微笑",
    "要相信自己",
    "今天也要快乐",
    "我爱你💕",
    "想你❤️",
    "晚安🌙",
    "早安☀️",
    "想你啦",
    "在干嘛",
    "想你了",
    "喜欢你",
    "要开心",
    "要快乐",
    "照顾好自己",
    "别熬夜",
    "多休息",
    "要幸福",
    "想见你"
];

// 弹窗颜色配置（丰富的多彩配色）
const bubbleColors = [
    // 粉色系
    { bg: 'rgba(255, 182, 193, 0.95)', text: '#8B4A6B', border: 'rgba(255, 182, 193, 0.5)' },
    { bg: 'rgba(255, 192, 203, 0.95)', text: '#8B4A6B', border: 'rgba(255, 192, 203, 0.5)' },
    { bg: 'rgba(255, 105, 180, 0.95)', text: '#8B104E', border: 'rgba(255, 105, 180, 0.5)' },
    { bg: 'rgba(255, 228, 225, 0.95)', text: '#8B6357', border: 'rgba(255, 228, 225, 0.5)' },
    { bg: 'rgba(255, 20, 147, 0.9)', text: '#FFFFFF', border: 'rgba(255, 20, 147, 0.5)' },

    // 橙色系
    { bg: 'rgba(255, 218, 185, 0.95)', text: '#8B6F47', border: 'rgba(255, 218, 185, 0.5)' },
    { bg: 'rgba(255, 160, 122, 0.95)', text: '#8B5A3C', border: 'rgba(255, 160, 122, 0.5)' },
    { bg: 'rgba(255, 165, 0, 0.9)', text: '#8B5A2B', border: 'rgba(255, 165, 0, 0.5)' },
    { bg: 'rgba(255, 140, 0, 0.9)', text: '#FFFFFF', border: 'rgba(255, 140, 0, 0.5)' },

    // 紫色系
    { bg: 'rgba(221, 160, 221, 0.95)', text: '#6B4A6B', border: 'rgba(221, 160, 221, 0.5)' },
    { bg: 'rgba(238, 130, 238, 0.95)', text: '#6B2F6B', border: 'rgba(238, 130, 238, 0.5)' },
    { bg: 'rgba(186, 85, 211, 0.9)', text: '#FFFFFF', border: 'rgba(186, 85, 211, 0.5)' },
    { bg: 'rgba(218, 112, 214, 0.95)', text: '#FFFFFF', border: 'rgba(218, 112, 214, 0.5)' },

    // 蓝色系
    { bg: 'rgba(173, 216, 230, 0.95)', text: '#4A6B8B', border: 'rgba(173, 216, 230, 0.5)' },
    { bg: 'rgba(135, 206, 250, 0.95)', text: '#2F4A6B', border: 'rgba(135, 206, 250, 0.5)' },
    { bg: 'rgba(176, 224, 230, 0.95)', text: '#4A6B8B', border: 'rgba(176, 224, 230, 0.5)' },
    { bg: 'rgba(100, 149, 237, 0.9)', text: '#FFFFFF', border: 'rgba(100, 149, 237, 0.5)' },

    // 绿色系
    { bg: 'rgba(152, 251, 152, 0.95)', text: '#2F6B4A', border: 'rgba(152, 251, 152, 0.5)' },
    { bg: 'rgba(144, 238, 144, 0.95)', text: '#2F6B4A', border: 'rgba(144, 238, 144, 0.5)' },
    { bg: 'rgba(127, 255, 212, 0.95)', text: '#2F6B6B', border: 'rgba(127, 255, 212, 0.5)' },
    { bg: 'rgba(102, 205, 170, 0.9)', text: '#FFFFFF', border: 'rgba(102, 205, 170, 0.5)' },

    // 黄色系
    { bg: 'rgba(255, 250, 205, 0.95)', text: '#8B8B4A', border: 'rgba(255, 250, 205, 0.5)' },
    { bg: 'rgba(255, 255, 224, 0.95)', text: '#8B8B4A', border: 'rgba(255, 255, 224, 0.5)' },
    { bg: 'rgba(255, 218, 185, 0.95)', text: '#8B6F47', border: 'rgba(255, 218, 185, 0.5)' },
    { bg: 'rgba(255, 228, 181, 0.95)', text: '#8B7D4A', border: 'rgba(255, 228, 181, 0.5)' },

    // 青色系
    { bg: 'rgba(175, 238, 238, 0.95)', text: '#2F6B6B', border: 'rgba(175, 238, 238, 0.5)' },
    { bg: 'rgba(64, 224, 208, 0.9)', text: '#FFFFFF', border: 'rgba(64, 224, 208, 0.5)' },
    { bg: 'rgba(72, 209, 204, 0.9)', text: '#FFFFFF', border: 'rgba(72, 209, 204, 0.5)' },

    // 红色系
    { bg: 'rgba(255, 182, 193, 0.95)', text: '#8B4A6B', border: 'rgba(255, 182, 193, 0.5)' },
    { bg: 'rgba(255, 160, 122, 0.95)', text: '#8B5A3C', border: 'rgba(255, 160, 122, 0.5)' },
    { bg: 'rgba(240, 128, 128, 0.95)', text: '#FFFFFF', border: 'rgba(240, 128, 128, 0.5)' },

    // 其他柔和色
    { bg: 'rgba(255, 228, 196, 0.95)', text: '#8B6F57', border: 'rgba(255, 228, 196, 0.5)' },
    { bg: 'rgba(255, 239, 213, 0.95)', text: '#8B7D6B', border: 'rgba(255, 239, 213, 0.5)' },
    { bg: 'rgba(230, 230, 250, 0.95)', text: '#6B6B8B', border: 'rgba(230, 230, 250, 0.5)' },
];

// 全局变量
let texts = [];
let heartPoints = [];
let originalPositions = []; // 存储原始位置
let isAnimating = false;
let isHeartFormed = false;
let isBursting = false;

// DOM元素
const textContainer = document.getElementById('textContainer');
const heartArea = document.getElementById('heartArea');
const powerIndicator = document.getElementById('powerIndicator');
const powerRing = document.getElementById('powerRing');
const powerText = document.getElementById('powerText');
const hintMessage = document.getElementById('hintMessage');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

// 获取随机消息
function getRandomMessage() {
    return caringMessages[Math.floor(Math.random() * caringMessages.length)];
}

// 计算爱心形状的点位（优化版 - 更圆润更美观）
function calculateHeartPoints(numPoints = 120) {
    const points = [];
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // 根据屏幕大小调整爱心大小
    const scale = Math.min(window.innerWidth, window.innerHeight) * 0.40; // 稍微增大

    // 优化的爱心参数方程（更圆润的爱心）
    function getHeartPoint(t) {
        // 使用更平滑的爱心方程
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        return { x, y };
    }

    // 外层轮廓点（更密集，让边缘更平滑）
    const outlinePoints = Math.floor(numPoints * 0.55); // 55%用于轮廓，减少轮廓密度
    for (let i = 0; i < outlinePoints; i++) {
        const t = (i / outlinePoints) * 2 * Math.PI;
        const { x, y } = getHeartPoint(t);

        // 缩放并居中
        const finalX = centerX + (x * scale) / 16;
        const finalY = centerY + (y * scale) / 16;

        points.push({ x: finalX, y: finalY });
    }

    // 内部填充点（使用更好的分布算法）
    const fillPoints = numPoints - outlinePoints;

    // 使用分层填充，让内部更均匀
    const layers = 3; // 3层填充
    const pointsPerLayer = Math.floor(fillPoints / layers);

    for (let layer = 0; layer < layers; layer++) {
        const layerRatio = 0.2 + (layer / layers) * 0.6; // 从0.2到0.8
        const layerPoints = layer === layers - 1 ? fillPoints - pointsPerLayer * (layers - 1) : pointsPerLayer;

        for (let i = 0; i < layerPoints; i++) {
            // 使用Halton序列或伪随机分布，让点更均匀
            const angle = (i / layerPoints + layer * 0.33) * 2 * Math.PI;
            const r = layerRatio + (Math.random() - 0.5) * 0.15; // 在层范围内小幅随机

            const { x, y } = getHeartPoint(angle);

            const finalX = centerX + (x * scale * r) / 16;
            const finalY = centerY + (y * scale * r) / 16;

            points.push({ x: finalX, y: finalY });
        }
    }

    // 计算爱心内部区域大小（用于点击检测）
    const heartWidth = scale * 2;
    const heartHeight = scale * 1.8;

    return { points, heartWidth, heartHeight, centerX, centerY };
}

// 获取屏幕边缘的随机起始位置
function getRandomEdgePosition() {
    const edge = Math.floor(Math.random() * 4);
    const padding = 50;

    switch (edge) {
        case 0: // 上
            return {
                x: Math.random() * window.innerWidth,
                y: -padding
            };
        case 1: // 右
            return {
                x: window.innerWidth + padding,
                y: Math.random() * window.innerHeight
            };
        case 2: // 下
            return {
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + padding
            };
        case 3: // 左
            return {
                x: -padding,
                y: Math.random() * window.innerHeight
            };
    }
}

// 创建文字元素
function createText(index, targetPoint, startPos) {
    const text = document.createElement('div');
    text.className = 'floating-text';
    text.textContent = getRandomMessage();
    text.dataset.index = index;

    // 随机选择颜色方案
    const colorScheme = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
    text.style.backgroundColor = colorScheme.bg;
    text.style.color = colorScheme.text;
    text.style.borderColor = colorScheme.border;

    // 优化字体大小，根据在爱心中的位置调整（中心稍大，边缘稍小）
    const baseSize = window.innerWidth <= 480 ? 11 : window.innerWidth <= 768 ? 12 : 14;
    // 计算距离中心的距离，用于调整大小
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distFromCenter = Math.sqrt(
        Math.pow(targetPoint.x - centerX, 2) + Math.pow(targetPoint.y - centerY, 2)
    );
    const maxDist = Math.min(window.innerWidth, window.innerHeight) * 0.2;
    const sizeFactor = 1 - (distFromCenter / maxDist) * 0.2; // 中心大20%
    const sizeVariation = (Math.random() - 0.5) * 0.8; // 减小变化范围
    text.style.fontSize = (baseSize * sizeFactor + sizeVariation) + 'px';

    // 优化padding，让弹窗大小更统一且协调
    const paddingVariation = (Math.random() - 0.5) * 1.5; // 减小变化
    const basePadding = window.innerWidth <= 480 ? 5 : window.innerWidth <= 768 ? 6 : 7;
    const basePaddingX = window.innerWidth <= 480 ? 9 : window.innerWidth <= 768 ? 11 : 13;
    text.style.padding = `${basePadding + paddingVariation}px ${basePaddingX + paddingVariation}px`;

    // 设置起始位置（left/top用于定位，transform在动画时设置）
    text.style.left = targetPoint.x + 'px';
    text.style.top = targetPoint.y + 'px';
    text.style.transform = 'translate3d(-50%, -50%, 0) scale(0.8)';

    // 存储原始位置
    originalPositions[index] = {
        startX: startPos.x,
        startY: startPos.y,
        targetX: targetPoint.x,
        targetY: targetPoint.y
    };

    texts.push({
        element: text,
        targetPoint,
        startPos,
        index
    });

    // 添加点击事件（仅在爱心形成后可用）
    text.style.pointerEvents = 'auto'; // 允许点击
    text.style.cursor = 'pointer'; // 鼠标指针

    text.addEventListener('click', function (e) {
        e.stopPropagation();
        if (isHeartFormed && !isBursting && !isAnimating) {
            shatterAndReplace(index);
        }
    });

    return text;
}

// 粉碎效果并替换元素
function shatterAndReplace(index) {
    if (!texts[index] || !texts[index].element) return;

    const textElement = texts[index].element;
    const targetPoint = texts[index].targetPoint;

    // 创建粉碎动画效果
    const rect = textElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 创建多个碎片
    const fragmentCount = 8;
    const fragments = [];

    for (let i = 0; i < fragmentCount; i++) {
        const fragment = document.createElement('div');
        fragment.style.position = 'fixed';
        fragment.style.left = centerX + 'px';
        fragment.style.top = centerY + 'px';
        fragment.style.width = rect.width / 3 + 'px';
        fragment.style.height = rect.height / 3 + 'px';
        fragment.style.backgroundColor = textElement.style.backgroundColor;
        fragment.style.borderRadius = '8px';
        fragment.style.pointerEvents = 'none';
        fragment.style.zIndex = '10000';
        fragment.style.opacity = '0.8';
        fragment.style.transform = 'translate(-50%, -50%)';
        fragment.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

        document.body.appendChild(fragment);
        fragments.push(fragment);

        // 随机方向散开
        const angle = (i / fragmentCount) * Math.PI * 2;
        const distance = 80 + Math.random() * 60;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        const rotation = (Math.random() - 0.5) * 360;

        requestAnimationFrame(() => {
            fragment.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(0)`;
            fragment.style.opacity = '0';
        });
    }

    // 原元素淡出并缩小
    textElement.style.transition = 'all 0.4s ease';
    textElement.style.transform = 'translate3d(-50%, -50%, 0) scale(0) rotate(180deg)';
    textElement.style.opacity = '0';

    // 清理碎片
    setTimeout(() => {
        fragments.forEach(frag => {
            if (frag.parentNode) {
                frag.parentNode.removeChild(frag);
            }
        });
    }, 600);

    // 删除旧元素
    setTimeout(() => {
        if (textElement.parentNode) {
            textElement.parentNode.removeChild(textElement);
        }

        // 创建新元素从边缘飘过来
        replaceElement(index, targetPoint);
    }, 400);
}

// 替换元素：从边缘生成新元素并移动到目标位置
function replaceElement(index, targetPoint) {
    // 获取随机边缘起始位置
    const startPos = getRandomEdgePosition();

    // 创建新元素
    const newText = document.createElement('div');
    newText.className = 'floating-text';
    newText.textContent = getRandomMessage();
    newText.dataset.index = index;

    // 随机选择颜色方案
    const colorScheme = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
    newText.style.backgroundColor = colorScheme.bg;
    newText.style.color = colorScheme.text;
    newText.style.borderColor = colorScheme.border;

    // 计算字体大小（与原元素相似）
    const baseSize = window.innerWidth <= 480 ? 11 : window.innerWidth <= 768 ? 12 : 14;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const distFromCenter = Math.sqrt(
        Math.pow(targetPoint.x - centerX, 2) + Math.pow(targetPoint.y - centerY, 2)
    );
    const maxDist = Math.min(window.innerWidth, window.innerHeight) * 0.2;
    const sizeFactor = 1 - (distFromCenter / maxDist) * 0.2;
    const sizeVariation = (Math.random() - 0.5) * 0.8;
    newText.style.fontSize = (baseSize * sizeFactor + sizeVariation) + 'px';

    // 设置padding
    const paddingVariation = (Math.random() - 0.5) * 1.5;
    const basePadding = window.innerWidth <= 480 ? 5 : window.innerWidth <= 768 ? 6 : 7;
    const basePaddingX = window.innerWidth <= 480 ? 9 : window.innerWidth <= 768 ? 11 : 13;
    newText.style.padding = `${basePadding + paddingVariation}px ${basePaddingX + paddingVariation}px`;

    // 设置初始位置（边缘位置）
    newText.style.left = startPos.x + 'px';
    newText.style.top = startPos.y + 'px';
    newText.style.transform = 'translate3d(-50%, -50%, 0) scale(0.5)';
    newText.style.opacity = '0';
    newText.style.pointerEvents = 'auto';
    newText.style.cursor = 'pointer';
    newText.style.transition = 'none';

    // 添加到容器
    textContainer.appendChild(newText);

    // 更新texts数组
    texts[index] = {
        element: newText,
        targetPoint: targetPoint,
        startPos: startPos,
        index: index
    };

    // 添加点击事件
    newText.addEventListener('click', function (e) {
        e.stopPropagation();
        if (isHeartFormed && !isBursting && !isAnimating) {
            shatterAndReplace(index);
        }
    });

    // 动画：从边缘移动到目标位置
    setTimeout(() => {
        newText.style.opacity = '1';
        newText.style.transition = 'transform 2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease';

        requestAnimationFrame(() => {
            // 计算偏移量
            const deltaX = startPos.x - targetPoint.x;
            const deltaY = startPos.y - targetPoint.y;

            // 设置初始transform（偏移）
            newText.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0.5) rotate(${(Math.random() - 0.5) * 20}deg)`;

            // 延迟后移动到目标位置
            setTimeout(() => {
                const rotation = (Math.random() - 0.5) * 2;
                newText.style.transform = `translate3d(0, 0, 0) scale(1) rotate(${rotation}deg)`;
            }, 50);
        });
    }, 100);
}

// 显示提示信息
function showHint(message, duration = 2000) {
    hintMessage.textContent = message;
    hintMessage.classList.add('show');

    setTimeout(() => {
        hintMessage.classList.remove('show');
    }, duration);
}

// 更新蓄力指示器
function updatePowerIndicator(power) {
    const percentage = power / 100;
    const rotation = percentage * 360;

    powerRing.style.transform = `rotate(${rotation - 90}deg)`;

    if (power < minPowerTime / maxPowerTime * 100) {
        powerText.textContent = '继续蓄力';
        powerText.classList.remove('warning');
    } else {
        powerText.textContent = `${Math.round(power)}%`;
        if (power >= 90) {
            powerText.classList.add('warning');
        } else {
            powerText.classList.remove('warning');
        }
    }
}

// 开始动画
function startAnimation() {
    if (isAnimating) return;
    isAnimating = true;
    isHeartFormed = false;
    isBursting = false;
    isMouseDown = false;
    isOnHeartArea = false;

    textContainer.innerHTML = '';
    texts = [];
    originalPositions = [];

    // 隐藏交互区域
    heartArea.classList.remove('active');

    // 计算爱心点位（优化数量和美观）
    const heartData = calculateHeartPoints(140); // 140个点：轮廓77个 + 填充63个，更饱满
    heartPoints = heartData.points;

    // 优化：分批创建DOM元素，每次只创建10个
    const createBatchSize = 10; // 每次创建10个DOM元素
    const delayBetweenElements = 35;
    let createIndex = 0;

    function createBatch() {
        const endIndex = Math.min(createIndex + createBatchSize, heartPoints.length);
        const fragment = document.createDocumentFragment();

        // 创建当前批次的所有元素
        for (let i = createIndex; i < endIndex; i++) {
            const point = heartPoints[i];
            const startPos = getRandomEdgePosition();
            const text = createText(i, point, startPos);
            fragment.appendChild(text);
        }

        // 一次性添加到DOM
        textContainer.appendChild(fragment);

        // 立即开始当前批次的动画（使用纯transform，避免reflow）
        for (let i = createIndex; i < endIndex; i++) {
            const text = texts[i].element;
            const point = heartPoints[i];
            const startPos = texts[i].startPos;

            // 计算偏移量（使用transform代替left/top，GPU加速）
            const deltaX = startPos.x - point.x;
            const deltaY = startPos.y - point.y;

            // 设置初始位置（使用transform，不触发reflow）
            text.style.left = point.x + 'px';
            text.style.top = point.y + 'px';
            text.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0.8)`;
            text.style.opacity = '0';

            // 存储目标偏移量（0,0表示到达目标位置）
            text.dataset.deltaX = deltaX;
            text.dataset.deltaY = deltaY;
            // 优化旋转角度，根据距离中心的位置调整（中心小旋转，边缘稍大旋转）
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const distFromCenter = Math.sqrt(
                Math.pow(point.x - centerX, 2) + Math.pow(point.y - centerY, 2)
            );
            const maxDist = Math.min(window.innerWidth, window.innerHeight) * 0.2;
            const rotationFactor = Math.min(distFromCenter / maxDist, 1);
            text.dataset.rotation = (Math.random() - 0.5) * (1.5 + rotationFactor * 1.5); // 中心±0.75度，边缘±3度

            // 延迟显示
            const delay = i * delayBetweenElements;
            setTimeout(() => {
                text.style.opacity = '1';
                text.classList.add('visible');

                // 使用requestAnimationFrame确保动画流畅
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        text.classList.add('forming');
                        const rotation = parseFloat(text.dataset.rotation);

                        // 只使用transform过渡（GPU加速，不触发reflow）
                        text.style.transition = 'transform 3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease';
                        // 目标位置：translate3d(0, 0, 0) 表示到达目标
                        // 使用优化后的旋转角度
                        const finalRotation = Math.abs(rotation) < 3 ? rotation : rotation * 0.6;
                        text.style.transform = `translate3d(0, 0, 0) rotate(${finalRotation}deg) scale(1)`;
                    }, 50);
                });
            }, delay);
        }

        createIndex = endIndex;

        // 如果还有元素需要创建，继续下一批
        if (createIndex < heartPoints.length) {
            requestAnimationFrame(() => {
                setTimeout(() => createBatch(), 20); // 每批间隔20ms
            });
        }
    }

    // 开始分批创建
    requestAnimationFrame(() => {
        createBatch();
    });

    // 动画完成后激活交互区域
    const totalElements = heartPoints.length;
    const totalDelay = totalElements * delayBetweenElements;
    const totalAnimationTime = totalDelay + 3500 + 500; // 延迟时间 + 动画时间 + 缓冲

    setTimeout(() => {
        isAnimating = false;
        isHeartFormed = true;

        // 设置交互区域大小和位置
        heartArea.style.width = heartData.heartWidth + 'px';
        heartArea.style.height = heartData.heartHeight + 'px';
        heartArea.style.left = heartData.centerX + 'px';
        heartArea.style.top = heartData.centerY + 'px';
        heartArea.style.transform = 'translate(-50%, -50%)';
        heartArea.classList.add('active');

        showHint('点击爱心中心区域散开，或点击单个元素替换', 3000);
    }, totalAnimationTime);
}

// 开始聚集
function startGathering() {
    if (!isHeartFormed || isGathering || isBursting) return;

    isGathering = true;
    heartArea.classList.remove('active');
    powerLevel = 0;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // 为每个文字计算到中心的位移向量，使用transform逐帧缓慢聚集
    texts.forEach((item, index) => {
        const text = item.element;
        text.classList.remove('forming');
        text.classList.add('gathering');

        const startX = parseFloat(text.style.left) || heartPoints[index].x;
        const startY = parseFloat(text.style.top) || heartPoints[index].y;

        // 让聚集目标有轻微随机偏移，避免完全重叠
        const offsetX = (Math.random() - 0.5) * 120;
        const offsetY = (Math.random() - 0.5) * 120;
        item.gatherDX = centerX + offsetX - startX;
        item.gatherDY = centerY + offsetY - startY;

        // 立即去除过渡，由rAF驱动
        text.style.transition = 'none';
    });

    // 蓄力增长，同时根据蓄力值驱动聚集进度
    powerUpdateInterval = setInterval(() => {
        if (powerLevel < 100) {
            powerLevel += 2; // 仅累积，不显示圆形指示
        }
    }, 50);

    // rAF 动画：根据蓄力值让所有文字缓慢移动到中心
    const animate = () => {
        const progress = Math.min(powerLevel / 100, 1); // 0->1
        const scaleValue = 1 - 0.35 * progress; // 从1缩放到约0.65

        for (let i = 0; i < texts.length; i++) {
            const text = texts[i].element;
            const dx = texts[i].gatherDX || 0;
            const dy = texts[i].gatherDY || 0;
            const rotation = parseFloat(text.dataset.rotation || '0');
            text.style.transform = `translate3d(${dx * progress}px, ${dy * progress}px, 0) rotate(${rotation}deg) scale(${scaleValue})`;
        }

        if (isGathering) {
            gatherAnimationFrame = requestAnimationFrame(animate);
        }
    };
    gatherAnimationFrame = requestAnimationFrame(animate);
}

// 停止聚集并爆发
function stopGathering() {
    if (!isGathering) return;

    clearInterval(powerUpdateInterval);
    powerIndicator.classList.remove('show');
    if (gatherAnimationFrame) {
        cancelAnimationFrame(gatherAnimationFrame);
        gatherAnimationFrame = null;
    }

    const holdTime = powerLevel;

    if (holdTime < minPowerTime / maxPowerTime * 100) {
        // 时间太短，回退
        showHint('蓄力时间太短！', 2000);
        revertToHeart();
    } else {
        // 根据蓄力值决定爆发程度
        burstHeart(holdTime);
    }
}

// 回退到爱心形状
function revertToHeart() {
    isGathering = false;

    texts.forEach((item, index) => {
        const text = item.element;
        text.classList.remove('gathering');
        text.classList.add('forming');
        const rotation = parseFloat(text.dataset.rotation || '0');
        // 平滑回到心形上的原位
        text.style.transition = 'transform 1.2s ease';
        text.style.transform = `translate3d(0, 0, 0) rotate(${rotation}deg) scale(1)`;
    });

    setTimeout(() => {
        heartArea.classList.add('active');
        isGathering = false;
    }, 1500);
}

// 创建爆开光晕效果
function createBurstEffect(centerX, centerY, power) {
    const effect = document.createElement('div');
    effect.style.position = 'fixed';
    effect.style.left = centerX + 'px';
    effect.style.top = centerY + 'px';
    effect.style.width = '0';
    effect.style.height = '0';
    effect.style.transform = 'translate(-50%, -50%)';
    effect.style.borderRadius = '50%';
    effect.style.background = `radial-gradient(circle, rgba(255, 182, 193, 0.8) 0%, rgba(255, 105, 180, 0.6) 30%, transparent 70%)`;
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '999';
    effect.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    effect.style.boxShadow = '0 0 100px rgba(255, 105, 180, 0.8), 0 0 200px rgba(255, 182, 193, 0.6)';

    document.body.appendChild(effect);

    // 触发光晕扩大动画
    requestAnimationFrame(() => {
        const size = Math.min(window.innerWidth, window.innerHeight) * (power / 100) * 1.5;
        effect.style.width = size + 'px';
        effect.style.height = size + 'px';
        effect.style.opacity = '0';
    });

    // 移除效果元素
    setTimeout(() => {
        if (effect.parentNode) {
            effect.parentNode.removeChild(effect);
        }
    }, 600);
}

// 爆发散开 - 无规则动画散开效果
function burstHeart(power) {
    isBursting = true;
    isHeartFormed = false;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // 创建爆开光晕效果
    createBurstEffect(centerX, centerY, power);

    // 取消蓄力聚集功能，直接从爱心位置开始散开
    const progress = 0; // 不使用聚集后的位置，直接从原始位置散开

    // 随机挑选10个元素进行快速散开
    const burstCount = 10;
    const shuffledIndices = [];
    for (let i = 0; i < texts.length; i++) {
        shuffledIndices.push(i);
    }
    // 随机打乱数组
    for (let i = shuffledIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
    }
    const burstIndices = new Set(shuffledIndices.slice(0, burstCount));

    // 为每个文字元素计算散开参数
    texts.forEach((item, index) => {
        const text = item.element;
        text.classList.remove('forming');
        text.classList.add('bursting');

        // 获取当前位置（直接从爱心位置开始，不使用聚集位置）
        const startX = heartPoints[index].x;
        const startY = heartPoints[index].y;
        const currentX = startX;
        const currentY = startY;

        const isBurstElement = burstIndices.has(index);

        if (isBurstElement) {
            // 被选中的10个元素：快速散开
            // 随机角度（360度全方位散开）
            const angle = Math.random() * Math.PI * 2;

            // 随机距离（散开到屏幕边缘外）
            const maxDistance = Math.max(window.innerWidth, window.innerHeight) * (0.9 + Math.random() * 0.3);

            // 计算目标位置（沿着角度方向）
            const targetX = currentX + Math.cos(angle) * maxDistance;
            const targetY = currentY + Math.sin(angle) * maxDistance;

            // 随机旋转速度（每帧旋转的角度）
            const rotationSpeedPerSecond = (Math.random() - 0.5) * 360;
            const rotationSpeed = rotationSpeedPerSecond / 60;

            // 随机缩放变化
            const startScale = 1;
            const endScale = 0.3 + Math.random() * 0.3;

            // 预计算常量
            const dx = targetX - currentX;
            const dy = targetY - currentY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // 快速散开的延迟（随机延迟，让散开更自然）
            const delay = Math.random() * 100; // 0-100ms

            // 快速散开的持续时间
            const duration = 2000 + Math.random() * 1000; // 2-3秒

            // 优化曲线角度计算
            const curveAngle = Math.atan2(dy, dx) + Math.PI / 2;
            const cosCurveAngle = Math.cos(curveAngle);
            const sinCurveAngle = Math.sin(curveAngle);
            const scaleDelta = endScale - startScale;
            const curveAmplitude = Math.min(40, distance * 0.1);

            // 存储动画参数
            item.burstData = {
                startX: currentX,
                startY: currentY,
                targetX: targetX,
                targetY: targetY,
                dx: dx,
                dy: dy,
                cosCurveAngle: cosCurveAngle,
                sinCurveAngle: sinCurveAngle,
                scaleDelta: scaleDelta,
                curveAmplitude: curveAmplitude,
                rotationSpeed: rotationSpeed,
                startScale: startScale,
                endScale: endScale,
                delay: delay,
                duration: duration,
                startTime: null,
                finished: false,
                initialLeft: currentX,
                initialTop: currentY,
                isBurst: true // 标记为快速散开元素
            };
        } else {
            // 其他元素：缓慢向四边移动
            // 随机选择四边之一
            const edge = Math.floor(Math.random() * 4);
            let targetX, targetY;
            const padding = 100;

            switch (edge) {
                case 0: // 上
                    targetX = currentX + (Math.random() - 0.5) * window.innerWidth * 0.5;
                    targetY = -padding;
                    break;
                case 1: // 右
                    targetX = window.innerWidth + padding;
                    targetY = currentY + (Math.random() - 0.5) * window.innerHeight * 0.5;
                    break;
                case 2: // 下
                    targetX = currentX + (Math.random() - 0.5) * window.innerWidth * 0.5;
                    targetY = window.innerHeight + padding;
                    break;
                case 3: // 左
                    targetX = -padding;
                    targetY = currentY + (Math.random() - 0.5) * window.innerHeight * 0.5;
                    break;
            }

            // 预计算常量
            const dx = targetX - currentX;
            const dy = targetY - currentY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // 缓慢移动的延迟（稍微延迟，让快速散开的元素先动）
            const delay = 200 + Math.random() * 300; // 200-500ms

            // 缓慢移动的持续时间（较慢）
            const duration = 4000 + Math.random() * 2000; // 4-6秒

            // 轻微旋转
            const rotationSpeedPerSecond = (Math.random() - 0.5) * 60; // -30到30度/秒
            const rotationSpeed = rotationSpeedPerSecond / 60;

            // 缓慢缩放
            const startScale = 1;
            const endScale = 0.2 + Math.random() * 0.2; // 0.2-0.4，逐渐变小

            const scaleDelta = endScale - startScale;
            const curveAmplitude = Math.min(20, distance * 0.05); // 较小的曲线

            // 存储动画参数
            item.burstData = {
                startX: currentX,
                startY: currentY,
                targetX: targetX,
                targetY: targetY,
                dx: dx,
                dy: dy,
                cosCurveAngle: 0, // 缓慢移动不需要太多曲线
                sinCurveAngle: 0,
                scaleDelta: scaleDelta,
                curveAmplitude: curveAmplitude,
                rotationSpeed: rotationSpeed,
                startScale: startScale,
                endScale: endScale,
                delay: delay,
                duration: duration,
                startTime: null,
                finished: false,
                initialLeft: currentX,
                initialTop: currentY,
                isBurst: false // 标记为缓慢移动元素
            };
        }

        // 设置初始位置（只设置一次，之后只用transform）
        text.style.left = currentX + 'px';
        text.style.top = currentY + 'px';
        text.style.transition = 'none';
        text.style.opacity = '1';

        // 性能优化：启用GPU加速和will-change
        text.style.willChange = 'transform, opacity';
        text.style.transformOrigin = 'center center';
    });

    // 使用requestAnimationFrame创建流畅的动画
    let animationFrameId = null;
    const startTime = performance.now();

    function animateBurst(currentTime) {
        if (!isBursting) {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            return;
        }

        const elapsed = currentTime - startTime;
        let activeCount = 0;
        let finishedCount = 0;

        // 批量更新DOM，减少重排
        // 使用transform代替left/top，避免触发重排（reflow）
        texts.forEach((item, index) => {
            const text = item.element;
            const data = item.burstData;

            if (!data || data.finished) {
                finishedCount++;
                return;
            }

            // 延迟开始（已包含批次延迟和元素延迟）
            if (elapsed < data.delay) {
                activeCount++;
                return;
            }

            // 如果还没开始，记录开始时间
            if (data.startTime === null) {
                data.startTime = elapsed;
            }

            const animationElapsed = elapsed - data.startTime;
            const progress = Math.min(animationElapsed / data.duration, 1);

            if (progress >= 1) {
                // 动画完成，标记为完成
                data.finished = true;
                finishedCount++;
                // 清理will-change，释放资源
                text.style.willChange = 'auto';
                return;
            }

            activeCount++;

            // 根据元素类型选择不同的缓动函数
            let easeProgress;
            if (data.isBurst) {
                // 快速散开：使用更激进的缓动
                const easeProgress1 = 1 - Math.pow(1 - progress, 3);
                const easeProgress2 = 1 - Math.pow(1 - progress, 2);
                easeProgress = easeProgress1 * 0.7 + easeProgress2 * 0.3;
            } else {
                // 缓慢移动：使用更平滑的缓动
                easeProgress = 1 - Math.pow(1 - progress, 2);
            }

            // 优化曲线偏移：使用更平滑的曲线函数
            const curveProgress = Math.sin(progress * Math.PI);
            const curveOffset = curveProgress * (data.curveAmplitude || 20);
            const curveX = data.cosCurveAngle * curveOffset;
            const curveY = data.sinCurveAngle * curveOffset;

            // 计算当前位置（使用预计算的值）
            const currentX = data.startX + data.dx * easeProgress + curveX;
            const currentY = data.startY + data.dy * easeProgress + curveY;

            // 优化旋转：使用基于时间的旋转
            const rotationTime = animationElapsed / 1000; // 转换为秒
            const currentRotation = rotationTime * (data.rotationSpeed * 60); // 转回度/秒

            // 优化缩放：使用独立的缓动曲线
            const scaleEaseProgress = data.isBurst
                ? 1 - Math.pow(1 - progress, 2.5)  // 快速散开：快速缩放
                : 1 - Math.pow(1 - progress, 1.5); // 缓慢移动：缓慢缩放
            const currentScale = data.startScale + data.scaleDelta * scaleEaseProgress;

            // 优化透明度：根据元素类型使用不同的淡出曲线
            let opacity;
            if (data.isBurst) {
                // 快速散开：前70%保持不透明，后30%逐渐淡出
                opacity = progress < 0.7 ? 1 : Math.pow(1 - (progress - 0.7) / 0.3, 1.5);
            } else {
                // 缓慢移动：全程逐渐淡出，让消失更自然
                opacity = Math.pow(1 - progress, 1.2);
            }

            // 使用纯transform移动，避免重排（性能关键优化）
            // 计算相对于初始位置的偏移量（使用缓存值，避免读取DOM）
            const offsetX = currentX - data.initialLeft;
            const offsetY = currentY - data.initialTop;

            // 只使用transform，不修改left/top
            // 优化：将旋转和缩放分开，使用更精确的数值
            text.style.transform = `translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0) rotate(${currentRotation.toFixed(2)}deg) scale(${currentScale.toFixed(3)})`;
            text.style.opacity = Math.max(0, Math.min(1, opacity)).toFixed(3);
        });

        // 如果所有元素都完成了，停止动画
        if (finishedCount === texts.length) {
            isBursting = false;
            // 清理所有will-change
            texts.forEach((item) => {
                if (item.element) {
                    item.element.style.willChange = 'auto';
                }
            });
            // 所有散开动画完成后，延迟重新开始组合成爱心
            setTimeout(() => {
                if (!isBursting && !isAnimating) {
                    startAnimation();
                }
            }, 500); // 延迟500ms后重新开始
        } else if (activeCount > 0 || finishedCount < texts.length) {
            // 还有活跃的元素或等待延迟的元素，继续动画
            animationFrameId = requestAnimationFrame(animateBurst);
        } else {
            isBursting = false;
            // 如果意外结束，也尝试重新开始
            setTimeout(() => {
                if (!isBursting && !isAnimating) {
                    startAnimation();
                }
            }, 500);
        }
    }

    // 开始动画
    setTimeout(() => {
        animationFrameId = requestAnimationFrame(animateBurst);
    }, 100);

    // 安全超时（防止动画卡住）
    setTimeout(() => {
        if (isBursting) {
            isBursting = false;
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            // 超时后也尝试重新开始
            setTimeout(() => {
                if (!isBursting && !isAnimating) {
                    startAnimation();
                }
            }, 500);
        }
    }, 8000);
}

// 长按事件处理
let isMouseDown = false;
let isOnHeartArea = false;

function handleLongPressStart(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!isHeartFormed || isBursting) return;

    isMouseDown = true;
    isOnHeartArea = true;
}

function handleLongPressEnd(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!isHeartFormed || isBursting) return;

    isMouseDown = false;

    // 直接触发散开，不进行蓄力聚集
    burstHeart(50); // 使用默认值50作为power参数
}

function handleMouseLeave() {
    isOnHeartArea = false;
}

function handleMouseEnter() {
    isOnHeartArea = true;
}

// 全局鼠标事件（确保鼠标松开时能正确结束）
function handleGlobalMouseUp(e) {
    if (isMouseDown) {
        handleLongPressEnd(e);
    }
}

// 阻止右键菜单
function handleContextMenu(e) {
    e.preventDefault();
    return false;
}

// 事件监听 - 爱心区域
heartArea.addEventListener('mousedown', handleLongPressStart);
heartArea.addEventListener('mouseup', handleLongPressEnd);
heartArea.addEventListener('mouseenter', handleMouseEnter);
heartArea.addEventListener('mouseleave', handleMouseLeave);
heartArea.addEventListener('contextmenu', handleContextMenu);

// 全局事件（确保鼠标松开时能正确结束）
document.addEventListener('mouseup', handleGlobalMouseUp);

// 触摸事件（移动端）
heartArea.addEventListener('touchstart', handleLongPressStart, { passive: false });
heartArea.addEventListener('touchend', handleLongPressEnd, { passive: false });
heartArea.addEventListener('touchcancel', handleLongPressEnd, { passive: false });

// 按钮事件
startBtn.addEventListener('click', startAnimation);
resetBtn.addEventListener('click', () => {
    if (isAnimating || isBursting) return;

    textContainer.innerHTML = '';
    texts = [];
    heartPoints = [];
    originalPositions = [];
    isHeartFormed = false;
    isBursting = false;
    isMouseDown = false;
    isOnHeartArea = false;

    heartArea.classList.remove('active');
    hintMessage.classList.remove('show');
});

// 页面加载完成后自动开始
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        startAnimation();
    }, 500);
});

// 窗口大小改变时重新计算
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (!isAnimating && !isBursting && texts.length > 0) {
            const heartData = calculateHeartPoints(150);
            heartPoints = heartData.points;

            texts.forEach((item, index) => {
                if (heartPoints[index]) {
                    const point = heartPoints[index];
                    item.element.style.left = point.x + 'px';
                    item.element.style.top = point.y + 'px';
                }
            });

            // 更新交互区域
            heartArea.style.width = heartData.heartWidth + 'px';
            heartArea.style.height = heartData.heartHeight + 'px';
            heartArea.style.left = heartData.centerX + 'px';
            heartArea.style.top = heartData.centerY + 'px';
        }
    }, 300);
});

