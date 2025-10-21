(function() {
    // ============= DRXAOS THEMES PLUGIN 2025 =============
    // 馃帹 袦袠袪袨袙袨袡 校袪袨袙袝袧鞋 袣袨袛袗 - 小袨袟袛袗袧袨 袛袥携 孝袠袦袗 袣校袣袗, 袛袞袝肖肖袗 袘袝袟袨小袗 袠 小袨袟袛袗孝袝袥袝袡 GOOGLE! 馃殌
    // 鉁?袗袪啸袠孝袝袣孝校袪袗 袦袠袪袨袙袨袚袨 袣袥袗小小袗 鉁?    // 馃弳 袩袪袨袠袟袙袨袛袠孝袝袥鞋袧袨小孝鞋 袧袗 校袪袨袙袧袝 APPLE, AMAZON 袠 GOOGLE 馃弳
    
    // ============= 袧袝袦袝袛袥袝袧袧袨袝 袠小袩袪袗袙袥袝袧袠袝 袩袪袝袛校袩袪袝袞袛袝袧袠袡 袣袨袧小袨袥袠 =============
    // 袩械褉械褏胁邪褌褘胁邪械屑 褋芯蟹写邪薪懈械 Canvas 泻芯薪褌械泻褋褌芯胁 袛袨 蟹邪谐褉褍蟹泻懈 芯褋薪芯胁薪芯谐芯 泻芯写邪
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype.getContext) {
        var originalGetContext = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
            if (contextType === '2d') {
                if (!contextAttributes) contextAttributes = {};
                contextAttributes.willReadFrequently = true;
            }
            if (contextType === 'webgl' || contextType === 'webgl2') {
                if (!contextAttributes) contextAttributes = {};
                contextAttributes.willReadFrequently = true;
            }
            return originalGetContext.call(this, contextType, contextAttributes);
        };
    }
    
    // 袩械褉械褏胁邪褌褘胁邪械屑 褍褋褌邪薪芯胁泻褍 CSS 褋褌懈谢械泄 写谢褟 懈褋锌褉邪胁谢械薪懈褟 slider-vertical
    if (typeof CSSStyleDeclaration !== 'undefined') {
        var originalSetProperty = CSSStyleDeclaration.prototype.setProperty;
        CSSStyleDeclaration.prototype.setProperty = function(property, value, priority) {
            if (property === 'appearance' && value === 'slider-vertical') {
                value = 'none';
                this.writingMode = 'vertical-lr';
                this.direction = 'rtl';
            }
            return originalSetProperty.call(this, property, value, priority);
        };
        
        // 袩械褉械褏胁邪褌褘胁邪械屑 锌褉褟屑芯械 锌褉懈褋胁芯械薪懈械 褋褌懈谢械泄
        var originalSetAttribute = Element.prototype.setAttribute;
        Element.prototype.setAttribute = function(name, value) {
            if (name === 'style' && value.includes('slider-vertical')) {
                value = value.replace(/appearance:\s*slider-vertical/g, 'appearance: none; writing-mode: vertical-lr; direction: rtl');
            }
            return originalSetAttribute.call(this, name, value);
        };
    }
    
    // 袩褉懈屑械薪褟械屑 谐谢芯斜邪谢褜薪褘械 CSS 懈褋锌褉邪胁谢械薪懈褟 薪械屑械写谢械薪薪芯
    var immediateCSS = document.createElement('style');
    immediateCSS.textContent = `
        /* 袧袝袦袝袛袥袝袧袧袨袝 袠小袩袪袗袙袥袝袧袠袝 校小孝袗袪袝袙楔袠啸 小孝袠袥袝袡 */
        * {
            appearance: none !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
        }
        
        input, button, select, textarea {
            appearance: auto !important;
            -webkit-appearance: auto !important;
            -moz-appearance: auto !important;
        }
        
        input[type="range"] {
            appearance: none !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            writing-mode: vertical-lr !important;
            direction: rtl !important;
        }
    `;
    document.head.appendChild(immediateCSS);
    
    // 袩械褉械褏胁邪褌褘胁邪械屑 褋芯蟹写邪薪懈械 褝谢械屑械薪褌芯胁 写谢褟 懈褋锌褉邪胁谢械薪懈褟 slider-vertical
    if (typeof document !== 'undefined' && document.createElement) {
        var originalCreateElement = document.createElement;
        document.createElement = function(tagName) {
            var element = originalCreateElement.call(this, tagName);
            
            // 袝褋谢懈 褝褌芯 input 褋 type="range", 锌褉懈屑械薪褟械屑 锌褉邪胁懈谢褜薪褘械 褋褌懈谢懈
            if (tagName.toLowerCase() === 'input') {
                var originalSetAttribute = element.setAttribute;
                element.setAttribute = function(name, value) {
                    if (name === 'type' && value === 'range') {
                        this.style.appearance = 'none';
                        this.style.writingMode = 'vertical-lr';
                        this.style.direction = 'rtl';
                    }
                    return originalSetAttribute.call(this, name, value);
                };
            }
            
            return element;
        };
    }
    
    
    
    
    
    
    
    // ============= 袚袥袨袘袗袥鞋袧蝎袝 袩袝袪袝袦袝袧袧蝎袝 袠 校孝袠袥袠孝蝎 =============
    
    // 袚谢芯斜邪谢褜薪邪褟 蟹邪谐褉褍蟹泻邪 褕褉懈褎褌芯胁 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈
    if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800;900&family=SF+Pro+Display:wght@300;400;500;600;700;800;900&subset=cyrillic,cyrillic-ext,latin,latin-ext&display=swap';
        document.head.appendChild(fontLink);
    }
    
    // 袚谢芯斜邪谢褜薪褘械 薪邪褋褌褉芯泄泻懈 褕褉懈褎褌芯胁 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈
    var globalFontStyles = `
        * {
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            font-display: swap !important;
            font-synthesis: none !important;
            font-feature-settings: "kern" 1, "liga" 1, "calt" 1 !important;
            font-variant-ligatures: common-ligatures !important;
            font-optical-sizing: auto !important;
            text-rendering: optimizeLegibility !important;
        }
    `;
    
    // 袩褉懈屑械薪褟械屑 谐谢芯斜邪谢褜薪褘械 褋褌懈谢懈 褕褉懈褎褌芯胁
    if (!document.querySelector('#drxaos-global-font-styles')) {
        var globalFontStyle = document.createElement('style');
        globalFontStyle.id = 'drxaos-global-font-styles';
        globalFontStyle.textContent = globalFontStyles;
        document.head.appendChild(globalFontStyle);
    }
    
    // 小懈褋褌械屑邪 谢芯谐懈褉芯胁邪薪懈褟 懈 屑芯薪懈褌芯褉懈薪谐邪 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈
    var performanceMonitor = {
        startTime: 0,
        metrics: {},
        
        start: function(operation) {
            this.startTime = performance.now();
            this.metrics[operation] = { start: this.startTime };
        },
        
        end: function(operation) {
            if (this.metrics[operation]) {
                this.metrics[operation].duration = performance.now() - this.startTime;
            }
        },
        
        log: function(message, data) {
            // 袥芯谐懈褉芯胁邪薪懈械 芯褌泻谢褞褔械薪芯
        }
    };
    
    // 小懈褋褌械屑邪 芯锌褌懈屑懈蟹邪褑懈懈 褉械薪写械褉懈薪谐邪 薪邪 芯褋薪芯胁械 HTML Canvas 褋锌械褑懈褎懈泻邪褑懈懈
    var renderingOptimizer = {
        // Origin-clean flag 写谢褟 斜械蟹芯锌邪褋薪芯褋褌懈 (懈蟹 HTML Canvas spec)
        originClean: true,
        
        // 袩褉芯胁械褉泻邪 斜械蟹芯锌邪褋薪芯褋褌懈 写谢褟 cross-origin 褉械褋褍褉褋芯胁
        checkOriginClean: function() {
            // 袩褉芯胁械褉褟械屑, 褔褌芯 胁褋械 褉械褋褍褉褋褘 懈蟹 褌芯谐芯 卸械 懈褋褌芯褔薪懈泻邪
            var isSecure = window.location.protocol === 'https:' || window.location.hostname === 'localhost';
            this.originClean = isSecure;
            
            if (!this.originClean) {
            }
            
            return this.originClean;
        },
        
        // Premultiplied alpha 写谢褟 泻芯褉褉械泻褌薪芯泄 褉邪斜芯褌褘 褋 锌褉芯蟹褉邪褔薪芯褋褌褜褞
        usePremultipliedAlpha: true,
        
        // 袨锌褌懈屑懈蟹邪褑懈褟 写谢褟 褔邪褋褌芯谐芯 褔褌械薪懈褟 (will-read-frequently)
        willReadFrequently: function() {
            return /Android TV|Google TV|WebOS|Tizen|Smart TV|TV|Fire TV|FireTV|AFT|Roku|Apple TV|Chromecast/i.test(navigator.userAgent);
        },
        
        // 袩褉懈屑械薪械薪懈械 willReadFrequently 写谢褟 Canvas 褝谢械屑械薪褌芯胁 褋芯谐谢邪褋薪芯 HTML 褋锌械褑懈褎懈泻邪褑懈懈
        applyCanvasOptimizations: function() {
            try {
                // 袧邪褏芯写懈屑 胁褋械 canvas 褝谢械屑械薪褌褘 懈 锌褉懈屑械薪褟械屑 willReadFrequently
                var canvasElements = document.querySelectorAll('canvas');
                canvasElements.forEach(function(canvas) {
                    if (canvas.getContext) {
                        // 袩褉懈屑械薪褟械屑 泻 2D 泻芯薪褌械泻褋褌褍 褋芯谐谢邪褋薪芯 褋锌械褑懈褎懈泻邪褑懈懈
                        try {
                            var context2d = canvas.getContext('2d', { willReadFrequently: true });
                            if (context2d) {
                                // lampaLogger.log('袩褉懈屑械薪械薪 willReadFrequently 写谢褟 2D Canvas', { canvas: canvas });
                            }
                        } catch(e) {
                            // 2D 泻芯薪褌械泻褋褌 屑芯卸械褌 斜褘褌褜 薪械写芯褋褌褍锌械薪
                        }
                        
                        // 袩褉懈屑械薪褟械屑 泻 WebGL 泻芯薪褌械泻褋褌褍
                        try {
                            var gl = canvas.getContext('webgl', { willReadFrequently: true });
                            if (gl) {
                                // lampaLogger.log('袩褉懈屑械薪械薪 willReadFrequently 写谢褟 WebGL Canvas', { canvas: canvas });
                            }
                        } catch(e) {
                            // WebGL 屑芯卸械褌 斜褘褌褜 薪械写芯褋褌褍锌械薪
                        }
                        
                        // 袩褉懈屑械薪褟械屑 泻 WebGL2 泻芯薪褌械泻褋褌褍
                        try {
                            var gl2 = canvas.getContext('webgl2', { willReadFrequently: true });
                            if (gl2) {
                                // lampaLogger.log('袩褉懈屑械薪械薪 willReadFrequently 写谢褟 WebGL2 Canvas', { canvas: canvas });
                            }
                        } catch(e) {
                            // WebGL2 屑芯卸械褌 斜褘褌褜 薪械写芯褋褌褍锌械薪
                        }
                        
                        // 袩褉懈屑械薪褟械屑 泻 ImageBitmap 泻芯薪褌械泻褋褌褍
                        try {
                            var bitmap = canvas.getContext('bitmaprenderer', { willReadFrequently: true });
                            if (bitmap) {
                                // lampaLogger.log('袩褉懈屑械薪械薪 willReadFrequently 写谢褟 ImageBitmap Canvas', { canvas: canvas });
                            }
                        } catch(e) {
                            // ImageBitmap 泻芯薪褌械泻褋褌 屑芯卸械褌 斜褘褌褜 薪械写芯褋褌褍锌械薪
                        }
                    }
                });
                
                // 孝邪泻卸械 锌褉懈屑械薪褟械屑 泻 OffscreenCanvas 褝谢械屑械薪褌邪屑
                if (typeof OffscreenCanvas !== 'undefined') {
                    var offscreenCanvases = document.querySelectorAll('canvas');
                    offscreenCanvases.forEach(function(canvas) {
                        if (canvas.transferControlToOffscreen) {
                            try {
                                var offscreen = canvas.transferControlToOffscreen();
                                if (offscreen.getContext) {
                                    var offscreenContext = offscreen.getContext('2d', { willReadFrequently: true });
                                    if (offscreenContext) {
                                        // lampaLogger.log('袩褉懈屑械薪械薪 willReadFrequently 写谢褟 OffscreenCanvas', { canvas: canvas });
                                    }
                                }
                            } catch(e) {
                                // OffscreenCanvas 屑芯卸械褌 斜褘褌褜 薪械写芯褋褌褍锌械薪
                            }
                        }
                    });
                }
                
                // 袩械褉械褏胁邪褌褘胁邪械屑 褋芯蟹写邪薪懈械 薪芯胁褘褏 Canvas 泻芯薪褌械泻褋褌芯胁
                this.interceptCanvasContext();
            } catch(e) {
                // lampaLogger.error('袨褕懈斜泻邪 锌褉懈屑械薪械薪懈褟 Canvas 芯锌褌懈屑懈蟹邪褑懈泄', e);
            }
        },
        
        // 袩械褉械褏胁邪褌 褋芯蟹写邪薪懈褟 Canvas 泻芯薪褌械泻褋褌芯胁 褋芯谐谢邪褋薪芯 HTML Canvas 褋锌械褑懈褎懈泻邪褑懈懈
        interceptCanvasContext: function() {
            try {
                // 小芯褏褉邪薪褟械屑 芯褉懈谐懈薪邪谢褜薪褘泄 屑械褌芯写 getContext
                var originalGetContext = HTMLCanvasElement.prototype.getContext;
                
                // 袩械褉械芯锌褉械写械谢褟械屑 屑械褌芯写 getContext 褋芯谐谢邪褋薪芯 褋锌械褑懈褎懈泻邪褑懈懈
                HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
                    // 袝褋谢懈 褝褌芯 2D 泻芯薪褌械泻褋褌, 写芯斜邪胁谢褟械屑 willReadFrequently 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 getImageData
                    if (contextType === '2d') {
                        if (!contextAttributes) {
                            contextAttributes = {};
                        }
                        // 小芯谐谢邪褋薪芯 褋锌械褑懈褎懈泻邪褑懈懈: willReadFrequently=true 写谢褟 褔邪褋褌褘褏 getImageData 芯锌械褉邪褑懈泄
                        contextAttributes.willReadFrequently = true;
                        // lampaLogger.log('袩械褉械褏胁邪褔械薪 2D Canvas 泻芯薪褌械泻褋褌 褋 willReadFrequently', { canvas: this });
                    }
                    
                    // 袝褋谢懈 褝褌芯 WebGL 泻芯薪褌械泻褋褌, 褌邪泻卸械 写芯斜邪胁谢褟械屑 willReadFrequently
                    if (contextType === 'webgl' || contextType === 'webgl2') {
                        if (!contextAttributes) {
                            contextAttributes = {};
                        }
                        contextAttributes.willReadFrequently = true;
                        // lampaLogger.log('袩械褉械褏胁邪褔械薪 WebGL Canvas 泻芯薪褌械泻褋褌 褋 willReadFrequently', { canvas: this });
                    }
                    
                    // 袝褋谢懈 褝褌芯 ImageBitmap 泻芯薪褌械泻褋褌, 褌邪泻卸械 写芯斜邪胁谢褟械屑 willReadFrequently
                    if (contextType === 'bitmaprenderer') {
                        if (!contextAttributes) {
                            contextAttributes = {};
                        }
                        contextAttributes.willReadFrequently = true;
                        // lampaLogger.log('袩械褉械褏胁邪褔械薪 ImageBitmap Canvas 泻芯薪褌械泻褋褌 褋 willReadFrequently', { canvas: this });
                    }
                    
                    // 袙褘蟹褘胁邪械屑 芯褉懈谐懈薪邪谢褜薪褘泄 屑械褌芯写 褋 芯斜薪芯胁谢械薪薪褘屑懈 邪褌褉懈斜褍褌邪屑懈
                    return originalGetContext.call(this, contextType, contextAttributes);
                };
                
                // 袛芯锌芯谢薪懈褌械谢褜薪芯 锌械褉械褏胁邪褌褘胁邪械屑 OffscreenCanvas
                if (typeof OffscreenCanvas !== 'undefined' && OffscreenCanvas.prototype.getContext) {
                    var originalOffscreenGetContext = OffscreenCanvas.prototype.getContext;
                    OffscreenCanvas.prototype.getContext = function(contextType, contextAttributes) {
                        if (contextType === '2d') {
                            if (!contextAttributes) {
                                contextAttributes = {};
                            }
                            contextAttributes.willReadFrequently = true;
                            // lampaLogger.log('袩械褉械褏胁邪褔械薪 OffscreenCanvas 2D 泻芯薪褌械泻褋褌 褋 willReadFrequently', { canvas: this });
                        }
                        return originalOffscreenGetContext.call(this, contextType, contextAttributes);
                    };
                }
                
                // lampaLogger.log('袧邪褋褌褉芯械薪 锌械褉械褏胁邪褌 Canvas 泻芯薪褌械泻褋褌芯胁 褋芯谐谢邪褋薪芯 HTML 褋锌械褑懈褎懈泻邪褑懈懈');
            } catch(e) {
                // lampaLogger.error('袨褕懈斜泻邪 薪邪褋褌褉芯泄泻懈 锌械褉械褏胁邪褌邪 Canvas 泻芯薪褌械泻褋褌芯胁', e);
            }
        },
        
        // 袨锌褌懈屑懈蟹邪褑懈褟 褉械薪写械褉懈薪谐邪 写谢褟 褉邪蟹薪褘褏 褍褋褌褉芯泄褋褌胁
        optimizeForDevice: function() {
            var isTV = deviceDetection.isTV();
            var isMobile = deviceDetection.isMobile();
            
            if (isTV) {
                return {
                    useGPU: true,
                    premultipliedAlpha: true,
                    willReadFrequently: false,
                    optimizeForSpeed: true
                };
            } else if (isMobile) {
                return {
                    useGPU: true,
                    premultipliedAlpha: true,
                    willReadFrequently: true,
                    optimizeForSpeed: false
                };
            } else {
                return {
                    useGPU: false,
                    premultipliedAlpha: true,
                    willReadFrequently: true,
                    optimizeForSpeed: false
                };
            }
        },
        
        // 袩褉懈屑械薪械薪懈械 芯锌褌懈屑懈蟹邪褑懈泄 泻 褝谢械屑械薪褌邪屑
        applyOptimizations: function() {
            // 袩褉芯胁械褉褟械屑 斜械蟹芯锌邪褋薪芯褋褌褜 锌械褉械写 锌褉懈屑械薪械薪懈械屑 芯锌褌懈屑懈蟹邪褑懈泄
            this.checkOriginClean();
            
            var optimizations = this.optimizeForDevice();
            
            // 校袘袪袗袥袠 袙小袝 袗袚袪袝小小袠袙袧蝎袝 GPU 袨袩孝袠袦袠袟袗笑袠袠 - 袨袧袠 袥袨袦袗挟孝 LAMPA
            if (optimizations.useGPU) {
                var gpuCSS = `
                    /* 校袘袪袗袥袠 袙小袝 袗袚袪袝小小袠袙袧蝎袝 GPU 袨袩孝袠袦袠袟袗笑袠袠 - 袨袧袠 袥袨袦袗挟孝 LAMPA */
                `;
                styleManager.setStyle('drxaos-gpu-optimizations', gpuCSS);
            }
            
            // 校袘袪袗袥袠 袙小袝 袗袚袪袝小小袠袙袧蝎袝 袗袥鞋肖袗 袨袩孝袠袦袠袟袗笑袠袠 - 袨袧袠 袥袨袦袗挟孝 LAMPA
            if (optimizations.premultipliedAlpha) {
                var alphaCSS = `
                    /* 校袘袪袗袥袠 袙小袝 袗袚袪袝小小袠袙袧蝎袝 袗袥鞋肖袗 袨袩孝袠袦袠袟袗笑袠袠 - 袨袧袠 袥袨袦袗挟孝 LAMPA */
                `;
                styleManager.setStyle('drxaos-alpha-optimizations', alphaCSS);
            }
            
            // 校袘袪袗袥袠 袙小袝 袗袚袪袝小小袠袙袧蝎袝 袨袩孝袠袦袠袟袗笑袠袠 效孝袝袧袠携 - 袨袧袠 袥袨袦袗挟孝 LAMPA
            if (optimizations.willReadFrequently) {
                var readOptimizations = `
                    /* 校袘袪袗袥袠 袙小袝 袗袚袪袝小小袠袙袧蝎袝 袨袩孝袠袦袠袟袗笑袠袠 效孝袝袧袠携 - 袨袧袠 袥袨袦袗挟孝 LAMPA */
                `;
                styleManager.setStyle('drxaos-read-optimizations', readOptimizations);
            }
            
            // 校袘袪袗袥袠 袙小袝 袗袚袪袝小小袠袙袧蝎袝 袨袩孝袠袦袠袟袗笑袠袠 小袣袨袪袨小孝袠 - 袨袧袠 袥袨袦袗挟孝 LAMPA
            if (optimizations.optimizeForSpeed) {
                var speedOptimizations = `
                    /* 校袘袪袗袥袠 袙小袝 袗袚袪袝小小袠袙袧蝎袝 袨袩孝袠袦袠袟袗笑袠袠 小袣袨袪袨小孝袠 - 袨袧袠 袥袨袦袗挟孝 LAMPA */
                `;
                styleManager.setStyle('drxaos-speed-optimizations', speedOptimizations);
            }
            
            // 袩褉懈屑械薪褟械屑 Canvas 芯锌褌懈屑懈蟹邪褑懈懈
            this.applyCanvasOptimizations();
            
            // 袠褋锌褉邪胁谢褟械屑 褍褋褌邪褉械胁褕懈械 slider 褝谢械屑械薪褌褘
            this.fixDeprecatedSliders();
            
            // lampaLogger.log('袩褉懈屑械薪械薪褘 芯锌褌懈屑懈蟹邪褑懈懈 褉械薪写械褉懈薪谐邪', optimizations);
        },
        
        // 袠褋锌褉邪胁谢械薪懈械 褍褋褌邪褉械胁褕械谐芯 slider-vertical
        fixDeprecatedSliders: function() {
            try {
                // 袧邪褏芯写懈屑 胁褋械 褝谢械屑械薪褌褘 褋 褍褋褌邪褉械胁褕懈屑 slider-vertical
                var sliders = document.querySelectorAll('[style*="appearance: slider-vertical"], [style*="appearance:slider-vertical"]');
                
                sliders.forEach(function(slider) {
                    // 袟邪屑械薪褟械屑 薪邪 褋褌邪薪写邪褉褌薪褘泄 input type="range"
                    if (slider.tagName !== 'INPUT' || slider.type !== 'range') {
                        var newSlider = document.createElement('input');
                        newSlider.type = 'range';
                        newSlider.style.cssText = 'writing-mode: vertical-lr; direction: rtl;';
                        
                        // 袣芯锌懈褉褍械屑 邪褌褉懈斜褍褌褘
                        Array.from(slider.attributes).forEach(function(attr) {
                            if (attr.name !== 'style') {
                                newSlider.setAttribute(attr.name, attr.value);
                            }
                        });
                        
                        // 袟邪屑械薪褟械屑 褝谢械屑械薪褌
                        slider.parentNode.replaceChild(newSlider, slider);
                        // lampaLogger.log('袟邪屑械薪械薪 褍褋褌邪褉械胁褕懈泄 slider-vertical 薪邪 褋褌邪薪写邪褉褌薪褘泄 input', { element: newSlider });
                    }
                });
                
                // 孝邪泻卸械 懈褋锌褉邪胁谢褟械屑 CSS 褋褌懈谢懈
                var deprecatedCSS = `
                    /* 袠小袩袪袗袙袥袝袧袠袝 校小孝袗袪袝袙楔袝袚袨 SLIDER-VERTICAL */
                    input[type="range"] {
                        writing-mode: vertical-lr !important;
                        direction: rtl !important;
                        appearance: none !important;
                        -webkit-appearance: none !important;
                        -moz-appearance: none !important;
                    }
                    
                    /* 校斜懈褉邪械屑 褍褋褌邪褉械胁褕懈械 appearance 蟹薪邪褔械薪懈褟 */
                    *[style*="appearance: slider-vertical"],
                    *[style*="appearance:slider-vertical"] {
                        appearance: none !important;
                        -webkit-appearance: none !important;
                        -moz-appearance: none !important;
                        writing-mode: vertical-lr !important;
                        direction: rtl !important;
                    }
                    
                    /* 袗袚袪袝小小袠袙袧袨袝 袠小袩袪袗袙袥袝袧袠袝 袙小袝啸 校小孝袗袪袝袙楔袠啸 小孝袠袥袝袡 */
                    * {
                        appearance: none !important;
                        -webkit-appearance: none !important;
                        -moz-appearance: none !important;
                    }
                    
                    /* 袙芯褋褋褌邪薪邪胁谢懈胁邪械屑 薪褍卸薪褘械 appearance 写谢褟 泻芯薪泻褉械褌薪褘褏 褝谢械屑械薪褌芯胁 */
                    input, button, select, textarea {
                        appearance: auto !important;
                        -webkit-appearance: auto !important;
                        -moz-appearance: auto !important;
                    }
                    
                    input[type="range"] {
                        appearance: none !important;
                        -webkit-appearance: none !important;
                        -moz-appearance: none !important;
                        writing-mode: vertical-lr !important;
                        direction: rtl !important;
                    }
                `;
                styleManager.setStyle('drxaos-slider-fixes', deprecatedCSS);
                
                // lampaLogger.log('袠褋锌褉邪胁谢械薪褘 褍褋褌邪褉械胁褕懈械 slider 褝谢械屑械薪褌褘');
            } catch(e) {
                // lampaLogger.error('袨褕懈斜泻邪 懈褋锌褉邪胁谢械薪懈褟 褍褋褌邪褉械胁褕懈褏 slider 褝谢械屑械薪褌芯胁', e);
            }
        },
        
        // 袧邪斜谢褞写邪褌械谢褜 蟹邪 写懈薪邪屑懈褔械褋泻懈 褋芯蟹写邪胁邪械屑褘屑懈 褝谢械屑械薪褌邪屑懈
        setupDynamicElementObserver: function() {
            try {
                // 小芯蟹写邪械屑 薪邪斜谢褞写邪褌械谢褜 蟹邪 懈蟹屑械薪械薪懈褟屑懈 DOM
                var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'childList') {
                            // 袩褉芯胁械褉褟械屑 薪芯胁褘械 写芯斜邪胁谢械薪薪褘械 褍蟹谢褘
                            mutation.addedNodes.forEach(function(node) {
                                if (node.nodeType === 1) { // Element node
                                    // 袩褉芯胁械褉褟械屑 薪邪 褍褋褌邪褉械胁褕懈械 slider 褝谢械屑械薪褌褘
                                    if (node.style && (node.style.appearance === 'slider-vertical' || 
                                        node.getAttribute('style') && node.getAttribute('style').includes('slider-vertical'))) {
                                        // 袠褋锌褉邪胁谢褟械屑 褋褉邪蟹褍
                                        node.style.appearance = 'none';
                                        node.style.writingMode = 'vertical-lr';
                                        node.style.direction = 'rtl';
                                        // lampaLogger.log('袠褋锌褉邪胁谢械薪 写懈薪邪屑懈褔械褋泻懈 褋芯蟹写邪薪薪褘泄 slider 褝谢械屑械薪褌', { element: node });
                                    }
                                    
                                    // 袩褉芯胁械褉褟械屑 薪邪 Canvas 褝谢械屑械薪褌褘
                                    if (node.tagName === 'CANVAS') {
                                        // 袩褉懈屑械薪褟械屑 willReadFrequently 泻 薪芯胁芯屑褍 Canvas
                                        if (node.getContext) {
                                            try {
                                                var context = node.getContext('2d', { willReadFrequently: true });
                                                if (context) {
                                                    // lampaLogger.log('袩褉懈屑械薪械薪 willReadFrequently 泻 薪芯胁芯屑褍 Canvas', { canvas: node });
                                                }
                                            } catch(e) {
                                                // Canvas 屑芯卸械褌 斜褘褌褜 薪械写芯褋褌褍锌械薪
                                            }
                                        }
                                    }
                                    
                                    // 袪械泻褍褉褋懈胁薪芯 锌褉芯胁械褉褟械屑 写芯褔械褉薪懈械 褝谢械屑械薪褌褘
                                    var childSliders = node.querySelectorAll && node.querySelectorAll('[style*="appearance: slider-vertical"], [style*="appearance:slider-vertical"]');
                                    if (childSliders) {
                                        childSliders.forEach(function(slider) {
                                            slider.style.appearance = 'none';
                                            slider.style.writingMode = 'vertical-lr';
                                            slider.style.direction = 'rtl';
                                            // lampaLogger.log('袠褋锌褉邪胁谢械薪 写芯褔械褉薪懈泄 slider 褝谢械屑械薪褌', { element: slider });
                                        });
                                    }
                                    
                                    var childCanvases = node.querySelectorAll && node.querySelectorAll('canvas');
                                    if (childCanvases) {
                                        childCanvases.forEach(function(canvas) {
                                            if (canvas.getContext) {
                                                try {
                                                    var context = canvas.getContext('2d', { willReadFrequently: true });
                                                    if (context) {
                                                        // lampaLogger.log('袩褉懈屑械薪械薪 willReadFrequently 泻 写芯褔械褉薪械屑褍 Canvas', { canvas: canvas });
                                                    }
                                                } catch(e) {
                                                    // Canvas 屑芯卸械褌 斜褘褌褜 薪械写芯褋褌褍锌械薪
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    });
                });
                
                // 袧邪褔懈薪邪械屑 薪邪斜谢褞写械薪懈械
                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['style']
                });
                
                // lampaLogger.log('袧邪褋褌褉芯械薪 薪邪斜谢褞写邪褌械谢褜 蟹邪 写懈薪邪屑懈褔械褋泻懈屑懈 褝谢械屑械薪褌邪屑懈');
                
                // 袙芯蟹胁褉邪褖邪械屑 observer 写谢褟 胁芯蟹屑芯卸薪芯谐芯 芯褌泻谢褞褔械薪懈褟
                return observer;
            } catch(e) {
                // lampaLogger.error('袨褕懈斜泻邪 薪邪褋褌褉芯泄泻懈 薪邪斜谢褞写邪褌械谢褟 蟹邪 写懈薪邪屑懈褔械褋泻懈屑懈 褝谢械屑械薪褌邪屑懈', e);
                return null;
            }
        }
    };
    
    // 小懈褋褌械屑邪 谢芯谐懈褉芯胁邪薪懈褟 胁 泻芯薪褋芯谢褜 Lampa
    var lampaLogger = {
        log: function(message, data) {
            // 袥芯谐懈褉芯胁邪薪懈械 芯褌泻谢褞褔械薪芯
        },
        error: function(message, error) {
            // 袥芯谐懈褉芯胁邪薪懈械 芯褌泻谢褞褔械薪芯
        },
        warn: function(message, data) {
            // 袥芯谐懈褉芯胁邪薪懈械 芯褌泻谢褞褔械薪芯
        },
        info: function(message, data) {
            // 袥芯谐懈褉芯胁邪薪懈械 芯褌泻谢褞褔械薪芯
        }
    };
    
    // 袝写懈薪邪褟 褋懈褋褌械屑邪 写械褌械泻褑懈懈 褍褋褌褉芯泄褋褌胁 写谢褟 胁褋械谐芯 锌谢邪谐懈薪邪
    var deviceDetection = {
        isTV: function() {
            return /Android TV|Google TV|WebOS|Tizen|Smart TV|TV|Fire TV|FireTV|AFT|Roku|Apple TV|Chromecast/i.test(navigator.userAgent) || 
                   (window.screen.width >= 1920 && window.screen.height >= 1080 && 
                   /Android|Linux/i.test(navigator.userAgent)) ||
                   /AFT/i.test(navigator.userAgent) ||
                   (window.screen.width >= 3840 && window.screen.height >= 2160) || // 4K TV detection
                   (navigator.userAgent.includes('TV') && window.screen.width > 1280); // Generic TV detection
        },
        
        isMobile: function() {
            return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },
        
        isDesktop: function() {
            return !this.isTV() && !this.isMobile();
        },
        
        getDeviceType: function() {
            if (this.isTV()) return 'tv';
            if (this.isMobile()) return 'mobile';
            return 'desktop';
        }
    };
    
    // 袝写懈薪邪褟 褋懈褋褌械屑邪 芯斜褉邪斜芯褌泻懈 褋芯斜褘褌懈泄 泻邪褉褌芯褔械泻
    var cardEventManager = {
        // 袩褉懈屑械薪褟械褌 褋褌懈谢懈 锌褉懈 薪邪胁械写械薪懈懈
        applyHoverStyles: function($img) {
            if ($img.length) {
                $img.css({
                    'border': '8px solid #5a3494 !important',
                    'border-radius': '1.5em !important',
                    'box-shadow': '0 0 40px #5a3494, 0 0 80px #5a3494, 0 8px 20px rgba(0,0,0,0.6) !important',
                    'filter': 'brightness(1.2) contrast(1.1) saturate(1.1) !important',
                    'transform': 'scale(1.02) !important'
                });
            }
        },
        
        // 校斜懈褉邪械褌 褋褌懈谢懈 锌褉懈 褍褏芯写械 泻褍褉褋芯褉邪
        removeHoverStyles: function($img) {
            if ($img.length) {
                $img.css({
                    'border': 'none !important',
                    'border-radius': '1em !important',
                    'box-shadow': 'none !important',
                    'filter': 'none !important',
                    'transform': 'scale(var(--hover-scale, 1)) !important'
                });
            }
        },
        
        // 袠薪懈褑懈邪谢懈蟹懈褉褍械褌 芯斜褉邪斜芯褌褔懈泻懈 褋芯斜褘褌懈泄 写谢褟 胁褋械褏 泻邪褉褌芯褔械泻
        initCardEvents: function() {
            // 校写邪谢褟械屑 褋褌邪褉褘械 芯斜褉邪斜芯褌褔懈泻懈
            $('.card').off('mouseenter.drxaos mouseleave.drxaos');
            $('.card.selector').off('mouseenter.drxaos mouseleave.drxaos');
            
            // 袛芯斜邪胁谢褟械屑 薪芯胁褘械 芯斜褉邪斜芯褌褔懈泻懈 写谢褟 胁褋械褏 泻邪褉褌芯褔械泻
            $('.card, .card.selector').on('mouseenter.drxaos', function() {
                var $card = $(this);
                var $img = $card.find('.card__img');
                cardEventManager.applyHoverStyles($img);
            });
            
            $('.card, .card.selector').on('mouseleave.drxaos', function() {
                var $card = $(this);
                var $img = $card.find('.card__img');
                cardEventManager.removeHoverStyles($img);
            });
        }
    };
    
    // 袝写懈薪邪褟 褋懈褋褌械屑邪 褍锌褉邪胁谢械薪懈褟 CSS 褋褌懈谢褟屑懈
    var styleManager = {
        styles: {},
        
        // 袛芯斜邪胁谢褟械褌 懈谢懈 芯斜薪芯胁谢褟械褌 褋褌懈谢褜
        setStyle: function(id, css) {
            this.removeStyle(id);
            this.styles[id] = $('<style id="' + id + '">' + css + '</style>').appendTo('head');
        },
        
        // 校写邪谢褟械褌 褋褌懈谢褜
        removeStyle: function(id) {
            if (this.styles[id]) {
                this.styles[id].remove();
                delete this.styles[id];
            } else {
                $('#' + id).remove();
            }
        },
        
        // 袨褔懈褖邪械褌 胁褋械 褋褌懈谢懈 锌谢邪谐懈薪邪
        clearAllStyles: function() {
            var styleIds = [
                'drxaos-advanced-styles',
                'drxaos-poster-styles', 
                'drxaos-hover-scale-styles',
                'drxaos-interface-size-styles',
                'drxaos_animations_style',
                'drxaos_font_weight_style',
                'drxaos-glow-styles',
                'drxaos_fullbuttons_style',
                'drxaos_fullbuttons_style_on',
                'drxaos_theme_style'
            ];
            
            styleIds.forEach(function(id) {
                $('#' + id).remove();
            });
            
            this.styles = {};
        }
    };
    
    // 肖褍薪泻褑懈褟 写谢褟 锌褉懈薪褍写懈褌械谢褜薪芯谐芯 褋芯蟹写邪薪懈褟 芯斜胁芯写芯泻 锌芯褋褌械褉芯胁
    function createPosterOutlines() {
        try {
            // 袧邪褏芯写懈屑 胁褋械 泻邪褉褌芯褔泻懈
            var $cards = $('.card');
            
            $cards.each(function() {
                var $card = $(this);
                var $view = $card.find('.card__view');
                
                if ($view.length > 0) {
                    // 校写邪谢褟械屑 褋褌邪褉褘械 芯斜胁芯写泻懈
                    $view.find('.drxaos-poster-outline').remove();
                    
                    // 小芯蟹写邪械屑 薪芯胁褍褞 芯斜胁芯写泻褍
                    var $outline = $('<div class="drxaos-poster-outline"></div>');
                    $outline.css({
                        'position': 'absolute',
                        'top': '-0.5em',
                        'left': '-0.5em',
                        'right': '-0.5em',
                        'bottom': '-0.5em',
                        'border': '0.5em solid var(--theme-primary, #5a3494)',
                        'border-radius': '1.5em',
                        'z-index': '9999',
                        'pointer-events': 'none',
                        'opacity': '0',
                        'box-shadow': '0 0 30px var(--theme-primary, #5a3494)',
                        'display': 'block',
                        'visibility': 'visible',
                        'background': 'transparent',
                        'transition': 'opacity 0.3s ease'
                    });
                    
                    $view.append($outline);
                    
                    // 袛芯斜邪胁谢褟械屑 褋芯斜褘褌懈褟
                    $card.on('mouseenter', function() {
                        $outline.css({
                            'opacity': '1',
                            'border-color': 'var(--theme-primary, #5a3494)',
                            'box-shadow': '0 0 30px var(--theme-primary, #5a3494)'
                        });
                    });
                    
                    $card.on('mouseleave', function() {
                        $outline.css('opacity', '0');
                    });
                    
                    $card.on('focus', function() {
                        $outline.css({
                            'opacity': '1',
                            'border-color': 'var(--theme-accent, #0088bb)',
                            'box-shadow': '0 0 40px var(--theme-accent, #0088bb)'
                        });
                    });
                    
                    $card.on('blur', function() {
                        $outline.css('opacity', '0');
                    });
                }
            });
        } catch(e) {
            // lampaLogger.error('袨褕懈斜泻邪 褋芯蟹写邪薪懈褟 芯斜胁芯写芯泻 锌芯褋褌械褉芯胁', e);
        }
    }
    // 袨锌褌懈屑懈蟹懈褉芯胁邪薪芯 写谢褟 TV 褍褋褌褉芯泄褋褌胁 褋 褋芯胁褉械屑械薪薪褘屑懈 屑械褌芯写邪屑懈 2025 谐芯写邪:
    // - GPU 褍褋泻芯褉械薪懈械 (transform3d, will-change, contain)
    // - 袨锌褌懈屑懈蟹懈褉芯胁邪薪薪褘械 邪薪懈屑邪褑懈懈 (cubic-bezier, content-visibility)
    // - 校谢褍褔褕械薪薪邪褟 写械褌械泻褑懈褟 TV (4K, Roku, Apple TV, Chromecast)
    // - 袨锌褌懈屑懈蟹邪褑懈褟 褉械薪写械褉懈薪谐邪 (backface-visibility, perspective)
    // - 小芯胁褉械屑械薪薪褘械 CSS 褋胁芯泄褋褌胁邪 (contain, content-visibility)

    // ============= 袪袗小楔袠袪袝袧袧蝎袝 袧袗小孝袪袨袡袣袠 DRXAOS =============

    var advancedSettings = {
        cardBrightness: 100,
        cardSaturation: 100,
        shadowOpacity: 40,
        animationSpeed: 0.3,
        hoverScale: 1.05,
        modalOpacity: 95,
        modalBlur: 50,
        modalRadius: 2,
        menuWidth: 20,
        menuOpacity: 95,
        menuBlur: 30,
        contrast: 100,
        brightness: 100,
        saturation: 100,
        hue: 0,
        // 袧芯胁褘械 薪邪褋褌褉芯泄泻懈
        posterBorderWidth: 2,
        posterBorderRadius: '1',
        posterGlowIntensity: 10,
        posterAnimationSpeed: 0.3,
        cardBackgroundOpacity: 70,
        interfaceSize: 'normal' // normal, small, medium, large, xlarge
    };

    function loadAdvancedSettings() {
        try {
            // 袟邪谐褉褍卸邪械屑 薪邪褋褌褉芯泄泻懈 懈蟹 Lampa.Storage
            advancedSettings.interfaceSize = Lampa.Storage.get('interface_size', 'normal');
            advancedSettings.posterBorderWidth = parseInt(Lampa.Storage.get('poster_border_width', '2')) || 2;
            advancedSettings.posterBorderRadius = Lampa.Storage.get('poster_border_radius', '1');
            advancedSettings.posterGlowIntensity = parseInt(Lampa.Storage.get('poster_glow_intensity', '10')) || 10;
            advancedSettings.posterAnimationSpeed = parseFloat(Lampa.Storage.get('poster_animation_speed', '0.3')) || 0.3;
            advancedSettings.cardBackgroundOpacity = parseInt(Lampa.Storage.get('card_background_opacity', '70')) || 70;
            advancedSettings.hoverScale = parseFloat(Lampa.Storage.get('hover_scale', '1.05')) || 1.05;
            advancedSettings.animationSpeed = parseFloat(Lampa.Storage.get('animation_speed', '0.3')) || 0.3;
            
            // lampaLogger.log('袟邪谐褉褍卸械薪褘 褉邪褋褕懈褉械薪薪褘械 薪邪褋褌褉芯泄泻懈');
        } catch(e) {
            // lampaLogger.error('袨褕懈斜泻邪 蟹邪谐褉褍蟹泻懈 薪邪褋褌褉芯械泻', e);
        }
    }

    function saveAdvancedSettings() {
        try {
            // 小芯褏褉邪薪褟械屑 薪邪褋褌褉芯泄泻懈 胁 Lampa.Storage
            Lampa.Storage.set('interface_size', advancedSettings.interfaceSize);
            Lampa.Storage.set('poster_border_width', advancedSettings.posterBorderWidth.toString());
            Lampa.Storage.set('poster_border_radius', advancedSettings.posterBorderRadius);
            Lampa.Storage.set('poster_glow_intensity', advancedSettings.posterGlowIntensity.toString());
            Lampa.Storage.set('poster_animation_speed', advancedSettings.posterAnimationSpeed.toString());
            Lampa.Storage.set('card_background_opacity', advancedSettings.cardBackgroundOpacity.toString());
            Lampa.Storage.set('hover_scale', advancedSettings.hoverScale.toString());
            Lampa.Storage.set('animation_speed', advancedSettings.animationSpeed.toString());
            
            // lampaLogger.log('袧邪褋褌褉芯泄泻懈 褋芯褏褉邪薪械薪褘');
        } catch(e) {
            // lampaLogger.error('袨褕懈斜泻邪 褋芯褏褉邪薪械薪懈褟 薪邪褋褌褉芯械泻', e);
        }
    }

    function applyAdvancedSettings() {
        try {
            performanceMonitor.start('applyAdvancedSettings');
            if (!window.jQuery || !window.$) return;
        // 校写邪谢褟械屑 褌芯谢褜泻芯 褋褌懈谢懈 褉邪褋褕懈褉械薪薪褘褏 薪邪褋褌褉芯械泻, 袧袝 褋褌懈谢懈 褌械屑褘
        styleManager.removeStyle('drxaos-advanced-styles');
        styleManager.removeStyle('drxaos-poster-styles');
        styleManager.removeStyle('drxaos-hover-scale-styles');
        styleManager.removeStyle('drxaos-interface-size-styles');
        var s = advancedSettings;
        
        // 袨锌褉械写械谢褟械屑 屑邪褋褕褌邪斜 懈薪褌械褉褎械泄褋邪
        var scaleMultiplier = 1.0;
        switch(s.interfaceSize) {
            case 'normal': scaleMultiplier = 1.0; break;  // 袨斜褘褔薪褘泄 - 斜械蟹 懈蟹屑械薪械薪懈泄
            case 'small': scaleMultiplier = 0.8; break;   // 袦邪谢械薪褜泻懈泄
            case 'medium': scaleMultiplier = 1.1; break;  // 小褉械写薪懈泄
            case 'large': scaleMultiplier = 1.25; break; // 袘芯谢褜褕芯泄
            case 'xlarge': scaleMultiplier = 1.4; break; // 袨褔械薪褜 斜芯谢褜褕芯泄
            default: scaleMultiplier = 1.0; break;
        }
            
            // 袨锌褉械写械谢褟械屑 褌懈锌 褍褋褌褉芯泄褋褌胁邪 褔械褉械蟹 械写懈薪褍褞 褋懈褋褌械屑褍
            var isTV = deviceDetection.isTV();
            
            // 袨锌褌懈屑懈蟹邪褑懈褟 写谢褟 孝袙-褍褋褌褉芯泄褋褌胁
            var css = isTV ? 
                // 校锌褉芯褖械薪薪褘械 褋褌懈谢懈 写谢褟 孝袙 (胁褋械 锌邪褉邪屑械褌褉褘 褍褔懈褌褘胁邪褞褌褋褟)
                '.card,.selector__item{box-shadow:0 8px 20px rgba(0,0,0,' + (s.shadowOpacity/100) + ')!important;transition:opacity 0.2s ease,transform 0.2s ease!important}.modal,.modal__content{opacity:' + (s.modalOpacity/100) + '!important;border-radius:' + s.modalRadius + 'em!important}.menu{width:' + s.menuWidth + 'em!important;opacity:' + (s.menuOpacity/100) + '!important}.card__img img{filter:contrast(' + s.contrast + '%) brightness(' + s.brightness + '%) saturate(' + s.saturation + '%) hue-rotate(' + s.hue + 'deg)!important}' :
                // 袩芯谢薪褘械 褋褌懈谢懈 写谢褟 袩袣/屑芯斜懈谢褜薪褘褏 (胁褋械 锌邪褉邪屑械褌褉褘 褍褔懈褌褘胁邪褞褌褋褟)
                '.card,.selector__item{box-shadow:0 8px 20px rgba(0,0,0,' + (s.shadowOpacity/100) + ')!important;transition:all ' + s.animationSpeed + 's ease!important}.modal,.modal__content{opacity:' + (s.modalOpacity/100) + '!important;backdrop-filter:blur(' + s.modalBlur + 'px)!important;border-radius:' + s.modalRadius + 'em!important}.menu{width:' + s.menuWidth + 'em!important;opacity:' + (s.menuOpacity/100) + '!important}.card__img img{filter:contrast(' + s.contrast + '%) brightness(' + s.brightness + '%) saturate(' + s.saturation + '%) hue-rotate(' + s.hue + 'deg)!important}';
            
        // 袩褉懈屑械薪褟械屑 薪芯胁褘械 薪邪褋褌褉芯泄泻懈 写谢褟 芯斜胁芯写芯泻 锌芯褋褌械褉芯胁
        var posterCSS = `
            .card .card__img {
                border: none !important;
                border-radius: ${s.posterBorderRadius === '50' ? '50%' : s.posterBorderRadius + 'em'} !important;
                transition: all ${s.posterAnimationSpeed}s ease !important;
            }
            .card:hover .card__img {
                border: ${s.posterBorderWidth}px solid var(--theme-primary, #5a3494) !important;
                box-shadow: 0 0 ${s.posterGlowIntensity}px var(--theme-primary, #5a3494) !important;
            }
            .card.focus .card__img {
                border: ${s.posterBorderWidth}px solid var(--theme-accent, #0088bb) !important;
                box-shadow: 0 0 ${s.posterGlowIntensity * 1.5}px var(--theme-accent, #0088bb) !important;
            }
            .card {
                background: rgba(0,0,0,${s.cardBackgroundOpacity/100}) !important;
            }
        `;
        
        // CSS 写谢褟 屑邪褋褕褌邪斜懈褉芯胁邪薪懈褟 懈薪褌械褉褎械泄褋邪 - 褌芯谢褜泻芯 械褋谢懈 薪械 薪芯褉屑邪谢褜薪褘泄 褉械卸懈屑
        var interfaceSizeCSS = '';
        
        // 袛芯斜邪胁谢褟械屑 CSS 锌械褉械屑械薪薪褍褞 写谢褟 hover-scale
        var hoverScaleCSS = `
            :root {
                --hover-scale: ${s.hoverScale};
            }
        `;
        
        if (scaleMultiplier !== 1.0) {
            interfaceSizeCSS = `
                /* 袦邪褋褕褌邪斜懈褉芯胁邪薪懈械 芯褋薪芯胁薪芯谐芯 泻芯薪褌械泄薪械褉邪 - 褌芯谢褜泻芯 褉邪蟹屑械褉褘 */
                .full-start {
                    font-size: ${scaleMultiplier}em !important;
                }
                
                /* 袦邪褋褕褌邪斜懈褉芯胁邪薪懈械 泻芯薪褌械泄薪械褉芯胁 泻邪褉褌芯褔械泻 - 褌芯谢褜泻芯 褉邪蟹屑械褉褘 */
                .selector {
                    font-size: ${scaleMultiplier}em !important;
                }
                
                /* 袗写邪锌褌邪褑懈褟 泻芯谢懈褔械褋褌胁邪 泻邪褉褌芯褔械泻 胁 蟹邪胁懈褋懈屑芯褋褌懈 芯褌 屑邪褋褕褌邪斜邪 */
                .selector__item {
                    width: ${100 / Math.max(4, Math.floor(4 * scaleMultiplier))}% !important;
                    flex: 0 0 ${100 / Math.max(4, Math.floor(4 * scaleMultiplier))}% !important;
                }
                
                /* 袛芯锌芯谢薪懈褌械谢褜薪邪褟 邪写邪锌褌邪褑懈褟 写谢褟 屑邪谢械薪褜泻芯谐芯 褉邪蟹屑械褉邪 */
                ${scaleMultiplier < 1 ? `
                .selector {
                    overflow-x: auto !important;
                }
                .selector__item {
                    min-width: ${200 * scaleMultiplier}px !important;
                }
                ` : ''}
                
                /* 袦邪褋褕褌邪斜懈褉芯胁邪薪懈械 褕褉懈褎褌芯胁 */
                body {
                    font-size: ${scaleMultiplier}em !important;
                }
                
                /* 袦邪褋褕褌邪斜懈褉芯胁邪薪懈械 泻薪芯锌芯泻 - 褌芯谢褜泻芯 褉邪蟹屑械褉 褕褉懈褎褌邪 */
                .button, .settings-param {
                
                /* 袦邪褋褕褌邪斜懈褉芯胁邪薪懈械 屑芯写邪谢褜薪褘褏 芯泻芯薪 */
                .modal, .modal__content {
                    transform: scale(${scaleMultiplier}) !important;
                    transform-origin: center !important;
                }
                
                /* 袦邪褋褕褌邪斜懈褉芯胁邪薪懈械 褋褌褉邪薪懈褑 褋 锌芯谢薪褘屑懈 褋锌懈褋泻邪屑懈 (褉邪蟹写械谢 "袝褖械") */
                .full-start__content, .full-start__buttons {
                    font-size: ${scaleMultiplier}em !important;
                }
                
                /* 袗写邪锌褌邪褑懈褟 泻邪褉褌芯褔械泻 胁 锌芯谢薪褘褏 褋锌懈褋泻邪褏 - 褌芯谢褜泻芯 褉邪蟹屑械褉 */
                .card {
                    font-size: ${scaleMultiplier}em !important;
                }
                
                /* 袩褉邪胁懈谢褜薪褘械 hover-褝褎褎械泻褌褘 写谢褟 泻邪褉褌芯褔械泻 */
                .card:hover {
                    transform: scale(${s.hoverScale}) !important;
                }
            `;
        }
        
        styleManager.setStyle('drxaos-advanced-styles', css);
        styleManager.setStyle('drxaos-poster-styles', posterCSS);
        styleManager.setStyle('drxaos-hover-scale-styles', hoverScaleCSS);
        styleManager.setStyle('drxaos-interface-size-styles', interfaceSizeCSS);
        
        performanceMonitor.end('applyAdvancedSettings');
        performanceMonitor.log('Advanced settings applied successfully');
        
        // 袩袪袠袧校袛袠孝袝袥鞋袧袨袝 袩袪袠袦袝袧袝袧袠袝 小孝袠袥袝袡 袣袧袨袩袣袠 肖袠袥鞋孝袪袗
        setTimeout(function() {
            var filterButtons = document.querySelectorAll('div.simple-button.simple-button--filter.filter--filter.selector');
            
            filterButtons.forEach(function(button) {
                if (button) {
                    button.style.setProperty('background', 'var(--glass-bg, rgba(0,0,0,0.7))', 'important');
                    button.style.setProperty('border', '2px solid var(--theme-primary, #5a3494)', 'important');
                    button.style.setProperty('border-radius', '2em', 'important');
                    button.style.setProperty('color', 'var(--text-main, #ffffff)', 'important');
                    button.style.setProperty('box-shadow', '0 4px 12px rgba(0,0,0,0.3)', 'important');
                }
            });
        }, 100);
        
        
        } catch(e) {
            // lampaLogger.error('袨褕懈斜泻邪 锌褉懈屑械薪械薪懈褟 褉邪褋褕懈褉械薪薪褘褏 薪邪褋褌褉芯械泻', e);
        }
    }

    loadAdvancedSettings();


'use strict';

Lampa.Lang.add({

drxaos_themes: { ru: 'DRXAOS 孝械屑褘', en: 'DRXAOS Themes', uk: 'DRXAOS 孝械屑懈' },

drxaos_theme: { ru: '笑胁械褌芯胁邪褟 褋褏械屑邪', en: 'Color Scheme', uk: '袣芯谢褜芯褉芯胁邪 褋褏械屑邪' },

drxaos_animations: { ru: '袗薪懈屑邪褑懈懈', en: 'Animations', uk: '袗薪褨屑邪褑褨褩' },

drxaos_glow: { ru: '小胁械褔械薪懈械', en: 'Glow', uk: '小胁褨褌褨薪薪褟' },

drxaos_fullbuttons: { ru: '袩芯谢薪褘械 薪邪蟹胁邪薪懈褟 泻薪芯锌芯泻', en: 'Full Button Labels', uk: '袩芯胁薪褨 薪邪蟹胁懈 泻薪芯锌芯泻' },

drxaos_transparency: { ru: '袩褉芯蟹褉邪褔薪芯褋褌褜', en: 'Transparency', uk: '袩褉芯蟹芯褉褨褋褌褜' },

drxaos_theme_desc: { ru: '袙褘斜械褉懈褌械 褑胁械褌芯胁褍褞 褋褏械屑褍 懈薪褌械褉褎械泄褋邪', en: 'Choose interface color scheme', uk: '袙懈斜械褉褨褌褜 泻芯谢褜芯褉芯胁褍 褋褏械屑褍 褨薪褌械褉褎械泄褋褍' },

drxaos_glow_desc: { ru: '袠薪褌械薪褋懈胁薪芯褋褌褜 褋胁械褔械薪懈褟 泻邪褉褌芯褔械泻 懈 泻薪芯锌芯泻 锌褉懈 薪邪胁械写械薪懈懈', en: 'Intensity of cards and buttons glow on hover', uk: '袉薪褌械薪褋懈胁薪褨褋褌褜 褋胁褨褌褨薪薪褟 泻邪褉褌芯泻 褨 泻薪芯锌芯泻 锌褉懈 薪邪胁械写械薪薪褨' },

drxaos_transparency_desc: { ru: '校褉芯胁械薪褜 锌褉芯蟹褉邪褔薪芯褋褌懈 锌邪薪械谢械泄 薪邪胁懈谐邪褑懈懈 懈 薪邪褋褌褉芯械泻', en: 'Transparency level of navigation and settings panels', uk: '袪褨胁械薪褜 锌褉芯蟹芯褉芯褋褌褨 锌邪薪械谢械泄 薪邪胁褨谐邪褑褨褩 褌邪 薪邪谢邪褕褌褍胁邪薪褜' },

drxaos_fullbuttons_desc: { ru: '袩芯泻邪蟹褘胁邪褌褜 褌械泻褋褌 泻薪芯锌芯泻 胁 泻邪褉褌芯褔泻邪褏 褎懈谢褜屑芯胁 (袨薪谢邪泄薪/孝芯褉褉械薪褌褘/袠蟹斜褉邪薪薪芯械)', en: 'Show button text in movie cards', uk: '袩芯泻邪蟹褍胁邪褌懈 褌械泻褋褌 泻薪芯锌芯泻 胁 泻邪褉褌泻邪褏 褎褨谢褜屑褨胁' },

drxaos_animations_desc: { ru: '袩谢邪胁薪褘械 邪薪懈屑邪褑懈懈 锌褉懈 薪邪胁械写械薪懈懈 (芯褌泻谢褞褔懈褌械 薪邪 褋谢邪斜褘褏 褍褋褌褉芯泄褋褌胁邪褏)', en: 'Smooth animations on hover (disable on weak devices)', uk: '袩谢邪胁薪褨 邪薪褨屑邪褑褨褩 锌褉懈 薪邪胁械写械薪薪褨 (胁懈屑泻薪褨褌褜 薪邪 褋谢邪斜泻懈褏 锌褉懈褋褌褉芯褟褏)' },

drxaos_font_weight: { ru: '孝芯谢褖懈薪邪 褕褉懈褎褌邪', en: 'Font Weight', uk: '孝芯胁褖懈薪邪 褕褉懈褎褌褍' },

drxaos_font_weight_desc: { ru: '袚谢芯斜邪谢褜薪邪褟 薪邪褋褌褉芯泄泻邪 褌芯谢褖懈薪褘 褕褉懈褎褌邪 写谢褟 胁褋械褏 褌械屑', en: 'Global font weight setting for all themes', uk: '袚谢芯斜邪谢褜薪械 薪邪谢邪褕褌褍胁邪薪薪褟 褌芯胁褖懈薪懈 褕褉懈褎褌褍 写谢褟 胁褋褨褏 褌械屑' },

drxaos_quick_theme: { ru: '袘褘褋褌褉褘泄 胁褘斜芯褉 褌械屑褘', en: 'Quick Theme Selector', uk: '楔胁懈写泻懈泄 胁懈斜褨褉 褌械屑懈' },

interface_size: { ru: '袪邪蟹屑械褉 懈薪褌械褉褎械泄褋邪', en: 'Interface Size', uk: '袪芯蟹屑褨褉 褨薪褌械褉褎械泄褋褍' },

interface_size_desc: { ru: '袠蟹屑械薪褟械褌 褉邪蟹屑械褉 胁褋械褏 褝谢械屑械薪褌芯胁 懈薪褌械褉褎械泄褋邪 (褕褉懈褎褌褘, 泻薪芯锌泻懈, 泻邪褉褌芯褔泻懈 懈 褌.写.)', en: 'Changes the size of all interface elements (fonts, buttons, cards, etc.)', uk: '袟屑褨薪褞褦 褉芯蟹屑褨褉 胁褋褨褏 械谢械屑械薪褌褨胁 褨薪褌械褉褎械泄褋褍 (褕褉懈褎褌懈, 泻薪芯锌泻懈, 泻邪褉褌泻懈 褌芯褖芯)' },

interface_size_small: { ru: '袦邪谢械薪褜泻懈泄', en: 'Small', uk: '袦邪谢懈泄' },

interface_size_medium: { ru: '小褉械写薪懈泄', en: 'Medium', uk: '小械褉械写薪褨泄' },

interface_size_large: { ru: '袘芯谢褜褕芯泄', en: 'Large', uk: '袙械谢懈泻懈泄' },

interface_size_xlarge: { ru: '袨褔械薪褜 斜芯谢褜褕芯泄', en: 'Extra Large', uk: '袛褍卸械 胁械谢懈泻懈泄' },

interface_size_normal: { ru: '袨斜褘褔薪褘泄', en: 'Normal', uk: '袟胁懈褔邪泄薪懈泄' }

});

var prevtheme = '';

function applyTheme(theme) {
    try {
        // lampaLogger.log('袧邪褔懈薪邪械屑 锌褉懈屑械薪械薪懈械 褌械屑褘', { theme: theme, device: deviceDetection.getDeviceType() });
        if (!window.jQuery || !window.$) return;
styleManager.removeStyle('drxaos_theme_style');

prevtheme = theme;

// 袛谢褟 褌械屑褘 'default' 锌褉芯褋褌芯 褍写邪谢褟械屑 胁褋械 泻邪褋褌芯屑薪褘械 褋褌懈谢懈
if (theme === 'default') {
    styleManager.removeStyle('drxaos_theme_style');
    return;
}

var glow = Lampa.Storage.get('drxaos_glow', 'medium');

var transparency = Lampa.Storage.get('drxaos_transparency', 85);

var glowValues = { 'off': '0', 'low': '0.15em', 'medium': '0.3em', 'high': '0.5em' };

var glowSize = glowValues[glow] || '0.3em';

var alpha = transparency / 100;

// 袠褋锌芯谢褜蟹褍械屑 械写懈薪褍褞 褋懈褋褌械屑褍 写械褌械泻褑懈懈 褍褋褌褉芯泄褋褌胁
var isTVDevice = (function() {
    return /Android TV|Google TV|WebOS|Tizen|Smart TV|TV|Fire TV|FireTV|AFT|Roku|Apple TV|Chromecast/i.test(navigator.userAgent) || 
           (window.screen.width >= 1920 && window.screen.height >= 1080 && 
           /Android|Linux/i.test(navigator.userAgent)) ||
           /AFT/i.test(navigator.userAgent) ||
           (window.screen.width >= 3840 && window.screen.height >= 2160) || // 4K TV detection
           (navigator.userAgent.includes('TV') && window.screen.width > 1280); // Generic TV detection
})();

var commonStyles = `

/* 袨袩孝袠袦袠袟袗笑袠携 袛袥携 孝袙-校小孝袪袨袡小孝袙 (2025) */
${isTVDevice ? `
/* 校袘袪袗袥袠 袗袚袪袝小小袠袙袧蝎袝 GPU 袨袩孝袠袦袠袟袗笑袠袠 - 袨袧袠 袥袨袦袗挟孝 LAMPA */

/* 校袘袪袗袥袠 袗袚袪袝小小袠袙袧蝎袝 袨袩孝袠袦袠袟袗笑袠袠 - 袨袧袠 袥袨袦袗挟孝 LAMPA */



/* 袛芯锌芯谢薪懈褌械谢褜薪邪褟 芯锌褌懈屑懈蟹邪褑懈褟 写谢褟 孝袙 - 薪邪褋褌褉芯泄泻懈 褕褉懈褎褌芯胁 锌褉懈屑械薪褟褞褌褋褟 谐谢芯斜邪谢褜薪芯 */

/* 校斜懈褉邪械屑 褋谢芯卸薪褘械 谐褉邪写懈械薪褌褘 薪邪 孝袙 */
.button, .settings-param {
    background: var(--glass-bg, rgba(0,0,0,0.7)) !important;
    color: var(--text-main, #ffffff) !important;
    border: 1px solid var(--theme-primary, #5a3494) !important;
    border-radius: 0.8em !important;
    transition: all 0.3s ease !important;
}

/* 校锌褉芯褖邪械屑 褌械薪懈 */
.button, .settings-param {
    box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
}

/* 袨袘袙袨袛袣袠 袛袥携 袣袗袪孝袨效袝袣 袧袗 孝袙 (2025) */
body .card, .card {
    border: none !important;
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), 
                opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

body .card .card__img, .card .card__img {
    border: none !important;
    border-radius: 1em !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}

/* 袨袘袙袨袛袣袠 袩袪袠 HOVER 袧袗 TV */
body .card:hover .card__img, .card:hover .card__img {
    border: 3px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.2em !important;
    box-shadow: 0 0 20px var(--theme-primary, #5a3494) !important;
}

/* 袨袘袙袨袛袣袠 袩袪袠 FOCUS 袧袗 TV */
body .card.focus .card__img, .card.focus .card__img {
    border: 3px solid var(--theme-accent, #0088bb) !important;
    border-radius: 1.2em !important;
    box-shadow: 0 0 30px var(--theme-accent, #0088bb) !important;
}


body .card.focus, .card.focus {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
}

/* 袨斜胁芯写泻懈 写谢褟 锌芯褋褌械褉芯胁 薪邪 TV 褋 锌芯屑芯褖褜褞 锌褋械胁写芯褝谢械屑械薪褌芯胁 */
body .card.focus .card__view::after,
body .card.hover .card__view::after {
    content: "" !important;
    position: absolute !important;
    top: -0.5em !important;
    left: -0.5em !important;
    right: -0.5em !important;
    bottom: -0.5em !important;
    border: 0.3em solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.4em !important;
    z-index: 9999 !important;
    pointer-events: none !important;
    opacity: 1 !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
    display: block !important;
    visibility: visible !important;
}

body .card.focus .card__view::after {
    border-color: var(--theme-accent, #0088bb) !important;
    box-shadow: 0 0 30px var(--theme-accent, #0088bb) !important;
}


/* 小褌懈谢懈 写谢褟 屑械薪褞 薪邪 孝袙 - 懈褋锌褉邪胁谢褟械屑 褔械褉薪褍褞 褉邪屑泻褍 懈 褌械泻褋褌 */
body .menu__item, .menu__item {
    background: var(--glass-bg, rgba(0,0,0,0.7)) !important;
    color: var(--text-main, #ffffff) !important;
    border: 1px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1em !important;
    transition: all 0.2s ease !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}

body .menu__item:hover, .menu__item:hover {
    background: var(--theme-primary, #5a3494) !important;
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 1.2em !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;
    /* 校斜褉邪薪芯 褍胁械谢懈褔械薪懈械 锌褉懈 薪邪胁械写械薪懈懈 */
}

body .menu__item.focus, .menu__item.focus {
    background: var(--theme-accent, #0088bb) !important;
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.2em !important;
    box-shadow: 0 0 30px var(--theme-accent, #0088bb), 0 6px 15px rgba(0,0,0,0.4) !important;
    /* 校斜褉邪薪芯 褍胁械谢懈褔械薪懈械 锌褉懈 褎芯泻褍褋械 */
}

/* 小孝袠袥袠袟袗笑袠携 TORRENT-SERIAL_CONTENT 袛袥携 孝袙 */
.torrent-serial_content, div.torrent-serial_content {
    background: rgba(0,0,0,0.8) !important;
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.2em !important;
    color: #ffffff !important;
    font-family: var(--font-family) !important;
    padding: 1em 1.5em !important;
    margin: 0.5em !important;
    transition: all 0.2s ease !important;
    box-shadow: 0 8px 25px rgba(0,0,0,0.4) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    min-height: 3em !important;
}

.torrent-serial_content:hover, div.torrent-serial_content:hover {
    background: var(--theme-primary, #5a3494) !important;
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 1.5em !important;
    color: #ffffff !important;
    box-shadow: 0 0 25px var(--theme-primary, #5a3494), 0 12px 35px rgba(0,0,0,0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
}

.torrent-serial_content.focus, div.torrent-serial_content.focus {
    background: var(--theme-accent, #0088bb) !important;
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.5em !important;
    color: #ffffff !important;
    box-shadow: 0 0 30px var(--theme-accent, #0088bb), 0 12px 35px rgba(0,0,0,0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
}


/* 小褌懈谢懈 写谢褟 泻薪芯锌泻懈 斜褘褋褌褉芯泄 褋屑械薪褘 褌械屑 薪邪 孝袙 */
.drxaos-theme-quick-btn {
    background: rgba(0,0,0,0.7) !important;
    color: #ffffff !important;
    border: 1px solid transparent !important;
    border-radius: 0.5em !important;
    padding: 0.5em !important;
    margin: 0.2em !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-width: 2.5em !important;
    min-height: 2.5em !important;
    transition: all 0.2s ease !important;
}

.drxaos-theme-quick-btn:hover,
.drxaos-theme-quick-btn:focus,
.drxaos-theme-quick-btn.focused {
    background: var(--theme-primary, #5a3494) !important;
    color: #ffffff !important;
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 0.8em !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
    /* 校斜褉邪薪芯 褍胁械谢懈褔械薪懈械 锌褉懈 薪邪胁械写械薪懈懈 */
    outline: none !important;
}

/* 袨褌泻谢褞褔邪械屑 锌械褉械褏胁邪褌 褎芯泻褍褋邪 泻薪芯锌泻芯泄 */
.drxaos-theme-quick-btn {
    pointer-events: auto !important;
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
}

.drxaos-theme-quick-btn:focus {
    outline: none !important;
    box-shadow: none !important;
}

/* 袗袚袪袝小小袠袙袧蝎袝 袨袘袙袨袛袣袠 袛袥携 袣袗袪孝袨效袝袣 - 袦袗袣小袠袦袗袥鞋袧袗携 小袩袝笑袠肖袠效袧袨小孝鞋 */
/* 袘袗袟袨袙蝎袝 小孝袠袥袠 袛袥携 袣袗袪孝袨效袝袣 - 小 袨袘袙袨袛袣袗袦袠 袧袗 袩袨小孝袝袪袗啸 */
html body .card.selector .card__img,
.card.selector .card__img,
html body .card .card__img,
.card .card__img {
    border: none !important;
    border-radius: 1em !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}

/* 袨袘袙袨袛袣袠 袩袪袠 HOVER */
html body .card.selector:hover .card__img,
.card.selector:hover .card__img,
html body .card:hover .card__img,
.card:hover .card__img {
    border: none !important;
    border-radius: 1.2em !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
    outline: none !important;
}

/* 袨袘袙袨袛袣袠 袩袪袠 FOCUS */
html body .card.selector.focus .card__img,
.card.selector.focus .card__img,
html body .card.focus .card__img,
.card.focus .card__img {
    border: none !important;
    border-radius: 1.2em !important;
    box-shadow: 0 0 30px var(--theme-accent, #0088bb) !important;
    outline: none !important;
}


/* 袨褌泻谢褞褔邪械屑 褋谢芯卸薪褘械 CSS-褎懈谢褜褌褉褘 薪邪 孝袙 */
.card__img img, .card__img {
    filter: none !important;
    -webkit-filter: none !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
}

/* 校斜懈褉邪械屑 斜械谢褍褞 芯斜胁芯写泻褍 褋 锌芯褋褌械褉芯胁 - 锌械褉械芯锌褉械写械谢褟械屑 褋褌邪薪写邪褉褌薪褘械 褋褌懈谢懈 Lampa */
.card .card__img,
.card .card__img img,
.card__view .card__img,
.card__view .card__img img {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background: none !important;
    background-color: transparent !important;
}

/* 小芯蟹写邪械屑 芯斜胁芯写泻懈 写谢褟 锌芯褋褌械褉芯胁 褋 锌芯屑芯褖褜褞 锌褋械胁写芯褝谢械屑械薪褌芯胁 泻邪泻 胁 写褉褍谐懈褏 锌谢邪谐懈薪邪褏 */
.card.focus .card__view::after,
.card.hover .card__view::after {
    content: "" !important;
    position: absolute !important;
    top: -0.5em !important;
    left: -0.5em !important;
    right: -0.5em !important;
    bottom: -0.5em !important;
    border: 0.3em solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.4em !important;
    z-index: 9999 !important;
    pointer-events: none !important;
    opacity: 1 !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
    display: block !important;
    visibility: visible !important;
}

.card.focus .card__view::after {
    border-color: var(--theme-accent, #0088bb) !important;
    box-shadow: 0 0 30px var(--theme-accent, #0088bb) !important;
}

/* 校锌褉芯褖邪械屑 谐褉邪写懈械薪褌褘 */
.card {
    background-image: none !important;
    background: rgba(0,0,0,0.7) !important;
}

/* 袨锌褌懈屑懈蟹邪褑懈褟 写谢褟 锌褉芯泻褉褍褌泻懈 */
.scroll__content, .scroll__body {
    -webkit-overflow-scrolling: touch !important;
    overflow-scrolling: touch !important;
}


/* 袦携袚袣袗携 袨袩孝袠袦袠袟袗笑袠携 袛袥携 FIRE TV */
.card, .menu__item, .settings-param, .files__item, .torrent-item,
.filter__item, .sort__item, .selectbox-item, .online__item, .online__item-line,
.online-prestige__item, .online-prestige__line, .online__tabs-item, 
.full-start__button, .head__action {
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
    filter: none !important;
    text-shadow: none !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
    transition: opacity 0.2s ease, transform 0.2s ease !important;
    will-change: auto !important;
}

/* 袨袘些袠袝 小孝袠袥袠 袛袥携 袦袝袧挟 - 袙小袝 校小孝袪袨袡小孝袙袗 */
.menu__item {
    background: var(--glass-bg, rgba(0,0,0,0.7)) !important;
    color: var(--text-main, #ffffff) !important;
    border: 1px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1em !important;
    transition: all 0.3s ease !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}

.menu__item:hover {
    background: var(--theme-primary, #5a3494) !important;
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 1.2em !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;
    /* 校斜褉邪薪芯 褍胁械谢懈褔械薪懈械 锌褉懈 薪邪胁械写械薪懈懈 */
}

.menu__item.focus {
    background: var(--theme-accent, #0088bb) !important;
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.2em !important;
    box-shadow: 0 0 30px var(--theme-accent, #0088bb), 0 6px 15px rgba(0,0,0,0.4) !important;
    /* 校斜褉邪薪芯 褍胁械谢懈褔械薪懈械 锌褉懈 褎芯泻褍褋械 */
}

/* 袨锌褌懈屑懈蟹懈褉芯胁邪薪薪褘械 hover-褝褎褎械泻褌褘 写谢褟 TV 2025 */
.menu__item {
    background: var(--glass-bg, rgba(0,0,0,0.7)) !important;
    color: var(--text-main, #ffffff) !important;
    border: 1px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1em !important;
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), 
                opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
    will-change: transform, opacity, border-color !important;
    contain: layout style paint !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}

.button, .settings-param {
    border: 1px solid transparent !important;
    border-radius: 0.8em !important;
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), 
                opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;
    will-change: transform, opacity, border-color !important;
    contain: layout style paint !important;
}

/* 小孝袠袥袠袟袗笑袠携 肖袠袥鞋孝袪袨袙 - 袣袗袩小校袥鞋袧蝎袡 小孝袠袥鞋 */
.filter--search, .filter--sort, .filter--filter,
.simple-button--filter, .selector--filter,
div.simple-button.simple-button--filter.filter--filter.selector,
.simple-button.simple-button--filter.selector.filter--filter {
    background: var(--glass-bg, rgba(0,0,0,0.7)) !important;
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 2em !important;
    color: var(--text-main, #ffffff) !important;
    font-family: var(--font-family) !important;
    font-size: 0.9em !important;
    padding: 0.8em 1.5em !important;
    margin: 0.3em !important;
    transition: all 0.3s ease !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
    display: flex !important;
    align-items: center !important;
    gap: 0.5em !important;
    min-height: 2.5em !important;
}

.filter--search:hover, .filter--sort:hover, .filter--filter:hover,
.simple-button--filter:hover, .selector--filter:hover,
div.simple-button.simple-button--filter.filter--filter.selector:hover,
.simple-button.simple-button--filter.selector.filter--filter:hover {
    background: var(--theme-primary, #5a3494) !important;
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 2.5em !important;
    color: var(--text-contrast, #ffffff) !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
}

.filter--search.focus, .filter--sort.focus, .filter--filter.focus,
.simple-button--filter.focus, .selector--filter.focus,
div.simple-button.simple-button--filter.filter--filter.selector.focus,
.simple-button.simple-button--filter.selector.filter--filter.focus {
    background: var(--theme-accent, #0088bb) !important;
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 2.5em !important;
    color: var(--text-contrast, #ffffff) !important;
    box-shadow: 0 0 30px var(--theme-accent, #0088bb), 0 6px 15px rgba(0,0,0,0.4) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
}


/* 小孝袠袥袠袟袗笑袠携 TORRENT-SERIAL_CONTENT */
.torrent-serial_content, div.torrent-serial_content {
    background: var(--glass-bg, rgba(0,0,0,0.8)) !important;
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.2em !important;
    color: var(--text-main, #ffffff) !important;
    font-family: var(--font-family) !important;
    padding: 1em 1.5em !important;
    margin: 0.5em !important;
    transition: all 0.3s ease !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    box-shadow: 0 8px 25px rgba(0,0,0,0.4) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    min-height: 3em !important;
}

.torrent-serial_content:hover, div.torrent-serial_content:hover {
    background: var(--theme-primary, #5a3494) !important;
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 1.5em !important;
    color: var(--text-contrast, #ffffff) !important;
    box-shadow: 0 0 30px var(--theme-primary, #5a3494), 0 12px 35px rgba(0,0,0,0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
}

.torrent-serial_content.focus, div.torrent-serial_content.focus {
    background: var(--theme-accent, #0088bb) !important;
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.5em !important;
    color: var(--text-contrast, #ffffff) !important;
    box-shadow: 0 0 35px var(--theme-accent, #0088bb), 0 12px 35px rgba(0,0,0,0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
}



/* 小孝袠袥袠袟袗笑袠携 袦袨袛袗袥鞋袧蝎啸 袨袣袨袧 - 袝袛袠袧袨袝 笑袝袥袨袝 (2025) */
.modal--large, .modal--large *, .modal--large .modal_content, .modal--large .modal_head, .modal--large .modal_title, .modal--large .modal_body,
.about, .about *, .about .modal_content, .about .modal_head, .about .modal_title, .about .modal_body,
.console, .console *, .console .modal_content, .console .modal_head, .console .modal_title, .console .modal_body,
.extensions, .extensions *, .extensions .modal_content, .extensions .modal_head, .extensions .modal_title, .extensions .modal_body {
    background: var(--theme-primary, #5a3494) !important;
    color: #ffffff !important;
    font-family: var(--font-family) !important;
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 40px rgba(0,0,0,0.6) !important;
    opacity: 1 !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    
    /* 袨锌褌懈屑懈蟹邪褑懈褟 写谢褟 TV 2025 */
    will-change: transform, opacity !important;
    contain: layout style paint !important;
    transform: translate3d(0, 0, 0) !important;
    backface-visibility: hidden !important;
    -webkit-transform: translate3d(0, 0, 0) !important;
    -webkit-backface-visibility: hidden !important;
}

/* 校斜懈褉邪械屑 胁褋械 胁薪褍褌褉械薪薪懈械 谐褉邪薪懈褑褘 懈 褎芯薪褘 */
.modal--large .modal_head, .modal--large .modal_body, .modal--large .modal_content,
.about .modal_head, .about .modal_body, .about .modal_content,
.console .modal_head, .console .modal_body, .console .modal_content,
.extensions .modal_head, .extensions .modal_body, .extensions .modal_content {
    background: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
}

/* 小褌懈谢懈蟹邪褑懈褟 蟹邪谐芯谢芯胁泻芯胁 */
.modal--large .modal_title, .about .modal_title, .console .modal_title, .extensions .modal_title {
    color: #ffffff !important;
    font-weight: 600 !important;
    font-size: 1.5em !important;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5) !important;
    background: transparent !important;
}

/* 校斜懈褉邪械屑 胁褋械 胁薪褍褌褉械薪薪懈械 褋褌懈谢懈 */
.modal--large .scroll, .modal--large .scroll_content, .modal--large .scroll_body,
.about .scroll, .about .scroll_content, .about .scroll_body,
.console .scroll, .console .scroll_content, .console .scroll_body,
.extensions .scroll, .extensions .scroll_content, .extensions .scroll_body {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
}

/* 小褌懈谢懈蟹邪褑懈褟 褝谢械屑械薪褌芯胁 褋锌懈褋泻芯胁 */
.modal--large .files__item, .modal--large .torrent-item, .modal--large .card, .modal--large .item, .modal--large .row, .modal--large .line,
.about .files__item, .about .torrent-item, .about .card, .about .item, .about .row, .about .line,
.console .files__item, .console .torrent-item, .console .card, .console .item, .console .row, .console .line,
.extensions .files__item, .extensions .torrent-item, .extensions .card, .extensions .item, .extensions .row, .extensions .line {
    background: rgba(255,255,255,0.1) !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
    border-radius: 1em !important;
    color: #ffffff !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.modal--large .files__item:hover, .modal--large .torrent-item:hover, .modal--large .card:hover, .modal--large .item:hover, .modal--large .row:hover, .modal--large .line:hover,
.about .files__item:hover, .about .torrent-item:hover, .about .card:hover, .about .item:hover, .about .row:hover, .about .line:hover,
.console .files__item:hover, .console .torrent-item:hover, .console .card:hover, .console .item:hover, .console .row:hover, .console .line:hover,
.extensions .files__item:hover, .extensions .torrent-item:hover, .extensions .card:hover, .extensions .item:hover, .extensions .row:hover, .extensions .line:hover {
    background: rgba(255,255,255,0.2) !important;
    border: 1px solid rgba(255,255,255,0.4) !important;
    border-radius: 1.2em !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
}

/* 袨斜胁芯写泻懈 写谢褟 泻薪芯锌芯泻 屑械薪褞 */
/* 小孝袠袥袠 袛袥携 袣袧袨袩袣袠 袘蝎小孝袪袨袡 小袦袝袧蝎 孝袝袦 */
.drxaos-theme-quick-btn {
    cursor: pointer !important;
    transition: all 0.2s ease !important;
    border: 1px solid transparent !important;
    border-radius: 0.5em !important;
    padding: 0.5em !important;
    margin: 0.2em !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-width: 2.5em !important;
    min-height: 2.5em !important;
    /* 袩褉懈薪褍写懈褌械谢褜薪褘泄 褎芯泻褍褋 写谢褟 薪邪胁懈谐邪褑懈懈 */
    position: relative !important;
    z-index: 1000 !important;
}

/* 袩褉芯褋褌邪褟 蟹邪褖懈褌邪 芯褌 ihide.js - 褌芯谢褜泻芯 褍斜懈褉邪械屑 褋泻褉褘褌懈械 */
.drxaos-theme-quick-btn.hidden,
.head__action.drxaos-theme-quick-btn.hidden {
    display: flex !important;
}

/* 袩褉懈薪褍写懈褌械谢褜薪褘械 褋褌懈谢懈 写谢褟 褎芯泻褍褋邪 */
.drxaos-theme-quick-btn:focus,
.drxaos-theme-quick-btn.focused {
    outline: 2px solid var(--theme-accent, #0088bb) !important;
    outline-offset: 2px !important;
    box-shadow: 0 0 10px var(--theme-accent, #0088bb) !important;
}

.drxaos-theme-quick-btn:hover {
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 0.8em !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
    background: var(--theme-primary, #5a3494) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
}

.drxaos-theme-quick-btn:focus,
.drxaos-theme-quick-btn.focused {
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 0.8em !important;
    box-shadow: 0 0 20px var(--theme-accent, #0088bb) !important;
    background: var(--theme-accent, #0088bb) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    outline: none !important;
}

/* 小褌懈谢懈 写谢褟 薪邪胁懈谐邪褑懈懈 Lampa */
.drxaos-theme-quick-btn[data-focus="true"]:focus,
.drxaos-theme-quick-btn[data-focusable="true"]:focus {
    outline: 2px solid var(--theme-accent, #0088bb) !important;
    outline-offset: 2px !important;
    background: var(--theme-primary, #5a3494) !important;
    color: var(--text-contrast, #ffffff) !important;
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 0.8em !important;
    box-shadow: 0 0 20px var(--theme-accent, #0088bb) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
}
` : ''}

/* GPU ACCELERATION */

.card, .menu__item, .settings-param, .files__item, .torrent-item,

.filter__item, .sort__item, .selectbox-item, .online__item, .online__item-line,

.online-prestige__item, .online-prestige__line, .online__tabs-item,

.full-start__button, .head__action, .bottom-bar__item, .bottom-bar__btn {

will-change: transform, opacity;

transform: translateZ(0);

backface-visibility: hidden;

perspective: 1000px;

}



.button, .settings-param {
    background: var(--glass-bg, rgba(0,0,0,0.7)) !important;
    color: var(--text-main, #ffffff) !important;
    border: 1px solid var(--theme-primary, #5a3494) !important;
    border-radius: 0.8em !important;
    transition: all 0.3s ease !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}

.button:hover, .settings-param:hover {
    background: var(--theme-primary, #5a3494) !important;
    border: 2px solid var(--theme-accent, #0088bb) !important;
    border-radius: 1em !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;
    /* 校斜褉邪薪芯 褍胁械谢懈褔械薪懈械 锌褉懈 薪邪胁械写械薪懈懈 */
}

.button.focus, .settings-param.focus {
    background: var(--theme-accent, #0088bb) !important;
    border: 2px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1em !important;
    box-shadow: 0 0 30px var(--theme-accent, #0088bb), 0 6px 15px rgba(0,0,0,0.4) !important;
    /* 校斜褉邪薪芯 褍胁械谢懈褔械薪懈械 锌褉懈 褎芯泻褍褋械 */
}

/* 袩袥袝袝袪 */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

/* BOTTOM BAR */

body .bottom-bar, .bottom-bar,

body .bottom-bar__body, .bottom-bar__body {

background: rgba(var(--bg-rgb), ${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-top: 2px solid var(--theme-accent) !important;

box-shadow: 0 -4px 20px rgba(var(--primary-rgb), 0.2) !important;

}

body .bottom-bar__item, .bottom-bar__item,

body .bottom-bar__btn, .bottom-bar__btn {

background: transparent !important;

border: none !important;

color: var(--text-main) !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .bottom-bar__item svg, .bottom-bar__item svg,

body .bottom-bar__btn svg, .bottom-bar__btn svg {

fill: var(--text-main) !important;

color: var(--text-main) !important;

filter: drop-shadow(0 1px 3px rgba(0,0,0,0.5));

}

body .bottom-bar__item.active, body .bottom-bar__item:hover, body .bottom-bar__item.focus,

body .bottom-bar__btn.active, body .bottom-bar__btn:hover, body .bottom-bar__btn.focus {

background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary)) !important;

border-radius: 1em !important;

transform: scale(var(--hover-scale, 1.1)) translateZ(0) !important;

box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.6) !important;

}

body .bottom-bar__item.active svg, body .bottom-bar__item:hover svg, body .bottom-bar__item.focus svg,

body .bottom-bar__btn.active svg, body .bottom-bar__btn:hover svg, body .bottom-bar__btn.focus svg {

fill: var(--text-contrast) !important;

color: var(--text-contrast) !important;

filter: drop-shadow(0 2px 4px rgba(0,0,0,0.6));

}

body .bottom-bar__item-text, .bottom-bar__item-text,

body .bottom-bar__btn-text, .bottom-bar__btn-text {

color: var(--text-main) !important;

text-shadow: none !important;

}

body .bottom-bar__item.active .bottom-bar__item-text,

body .bottom-bar__item:hover .bottom-bar__item-text,

body .bottom-bar__btn.active .bottom-bar__btn-text,

body .bottom-bar__btn:hover .bottom-bar__btn-text {

color: var(--text-contrast) !important;

text-shadow: none !important;

font-weight: 600 !important;

}

/* 袣袨袧孝袝袡袧袝袪蝎 */

body .card, .card, body .rows, .rows, body .line, .line {

border: none !important;

box-shadow: none !important;

outline: none !important;

background: transparent !important;

}

/* 袦袗袣小袠袦袗袥鞋袧袗携 小袩袝笑袠肖袠效袧袨小孝鞋 袛袥携 袨袘袙袨袛袨袣 袩袨小孝袝袪袨袙 */
html body .card.focus .card__view::after,
html body .card.hover .card__view::after,
.card.focus .card__view::after,
.card:hover .card__view::after {
    content: "" !important;
    position: absolute !important;
    top: -0.5em !important;
    left: -0.5em !important;
    right: -0.5em !important;
    bottom: -0.5em !important;
    border: 0.5em solid var(--theme-primary, #5a3494) !important;
    border-radius: 1.5em !important;
    z-index: 9999 !important;
    pointer-events: none !important;
    opacity: 1 !important;
    box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
    display: block !important;
    visibility: visible !important;
    background: transparent !important;
}

html body .card.focus .card__view::after,
.card.focus .card__view::after {
    border-color: var(--theme-accent, #0088bb) !important;
    box-shadow: 0 0 40px var(--theme-accent, #0088bb) !important;
}

body .menu__item, .menu__item {
    background: var(--glass-bg, rgba(0,0,0,0.7)) !important;
    color: var(--text-main, #ffffff) !important;
    border: 1px solid var(--theme-primary, #5a3494) !important;
    border-radius: 1em !important;
    overflow: hidden !important;
    padding: 0.6em 0.8em !important;
    margin: 0.2em 0.3em !important;
    max-width: calc(100% - 0.6em) !important;
    box-sizing: border-box !important;
    font-size: 0.9em !important;
    transition: all 0.3s ease !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}

/* 袣袨袧孝袝袡袧袝袪蝎 袦袝袧挟 - 孝袨袥鞋袣袨 袛袥携 袥袝袙袨袚袨 袦袝袧挟 */
body .menu .scroll__content, 
body .menu .scroll__body {
    overflow-x: hidden !important;
    padding: 0 !important;
}

body .menu, .menu {
    width: 100% !important;
    padding: 0.5em 0 !important;
}

/* 袙袨小小孝袗袧袨袙袥袝袧袠袝 袨孝小孝校袩袨袙 袛袥携 袣袨袧孝袝袧孝袗 */
body .full-start, .full-start,
body .full-start__body, .full-start__body,
body .full-start__content, .full-start__content {
    padding: 1em 1.5em !important;
    margin: 0 !important;
}

body .card, .card {
    margin: 0.5em !important;
}

body .card__view, .card__view {
    border-radius: 1em !important;
    overflow: hidden !important;
}

/* 袙袨小小孝袗袧袨袙袥袝袧袠袝 袨孝小孝校袩袨袙 袛袥携 袟袗袚袨袥袨袙袣袨袙 */
body .full-start__title, .full-start__title,
body .settings__title, .settings__title {
    padding: 0 1.5em !important;
    margin: 1em 0 0.5em 0 !important;
}

/* 袙袨小小孝袗袧袨袙袥袝袧袠袝 袨孝小孝校袩袨袙 袛袥携 袙小袝啸 袣袨袧孝袝袡袧袝袪袨袙 袣袨袧孝袝袧孝袗 */
body .full-start__grid, .full-start__grid,
body .full-start__list, .full-start__list,
body .full-start__row, .full-start__row {
    padding: 0 1.5em !important;
    margin: 0 !important;
}

/* 袙袨小小孝袗袧袨袙袥袝袧袠袝 袨孝小孝校袩袨袙 袛袥携 小袝袣笑袠袡 */
body .full-start__section, .full-start__section,
body .full-start__block, .full-start__block {
    padding: 0 1.5em !important;
    margin: 0 0 2em 0 !important;
}

/* 袙袨小小孝袗袧袨袙袥袝袧袠袝 袨孝小孝校袩袨袙 袛袥携 小袣袪袨袥袥-袣袨袧孝袝袡袧袝袪袨袙 袣袨袧孝袝袧孝袗 - 孝袨袥鞋袣袨 袛袥携 袚袥袗袙袧袨袡 小孝袪袗袧袠笑蝎 */
body .full-start .scroll__content,
body .full-start .scroll__body {
    padding: 1em 1.5em !important;
    margin: 0 !important;
}

/* 小袩袝笑袠袗袥鞋袧蝎袝 小孝袠袥袠 袛袥携 袛袥袠袧袧蝎啸 袧袗袟袙袗袧袠袡 */
body .menu__item[data-name="袠薪褎芯褉屑邪褑懈褟"], 
body .menu__item:contains("袠薪褎芯褉屑邪褑懈褟"),
body .menu__item[data-name="袪邪褋锌懈褋邪薪懈械"], 
body .menu__item:contains("袪邪褋锌懈褋邪薪懈械"),
body .menu__item[data-name="袠蟹斜褉邪薪薪芯械"], 
body .menu__item:contains("袠蟹斜褉邪薪薪芯械") {

padding: 0.5em 0.6em !important;

font-size: 0.85em !important;

margin: 0.15em 0.25em !important;

max-width: calc(100% - 0.5em) !important;

}

/* 袗袛袗袩孝袠袙袧蝎袡 袪袗袟袦袝袪 楔袪袠肖孝袗 袛袥携 袦袝袧挟 */
body .menu__item-title, .menu__item-title {

font-size: 0.9em !important;

white-space: nowrap !important;

overflow: hidden !important;

text-overflow: ellipsis !important;

max-width: calc(100% - 2em) !important;

}


/* 袨袧袥袗袡袧 袩袪袨小袦袨孝袪 */

body .online, .online,

body .online__body, .online__body,

body .online-view, .online-view {

background: rgba(var(--glass-bg), 0.45) !important;

border: 1.5px solid rgba(var(--glass-border), 0.4) !important;

border-radius: 1em !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

}

body .online__item, .online__item,

body .online__item-line, .online__item-line,

body .online-prestige__item, .online-prestige__item,

body .online-prestige__line, .online-prestige__line {

background: rgba(var(--glass-bg), 0.45) !important;

border: 1.5px solid rgba(var(--glass-border), 0.4) !important;

border-radius: 0.8em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

backdrop-filter: blur(20px) saturate(180%) !important;

-webkit-backdrop-filter: blur(20px) saturate(180%) !important;

color: var(--text-main) !important;

margin-bottom: 0.3em !important;

}

body .online__item *, .online__item *,

body .online__item-line *, .online__item-line *,

body .online-prestige__item *, .online-prestige__item *,

body .online-prestige__line *, .online-prestige__line * {

color: var(--text-main) !important;

text-shadow: none !important;

}

body .online__item.focus, body .online__item:hover, body .online__item.active,

body .online__item-line.focus, body .online__item-line:hover, body .online__item-line.active,

body .online-prestige__item.focus, body .online-prestige__item:hover, body .online-prestige__item.active,

body .online-prestige__line.focus, body .online-prestige__line:hover, body .online-prestige__line.active {

background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;

border: 2px solid var(--theme-accent) !important;

box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.6) !important;

transform: translateX(5px) scale(var(--hover-scale, 1.02)) translateZ(0) !important;

color: var(--text-contrast) !important;

backdrop-filter: blur(30px) saturate(200%) !important;

-webkit-backdrop-filter: blur(30px) saturate(200%) !important;

}

body .online__item.focus *, body .online__item:hover *, body .online__item.active *,

body .online__item-line.focus *, body .online__item-line:hover *, body .online__item-line.active *,

body .online-prestige__item.focus *, body .online-prestige__item:hover *, body .online-prestige__item.active *,

body .online-prestige__line.focus *, body .online-prestige__line:hover *, body .online-prestige__line.active * {

color: var(--text-contrast) !important;

text-shadow: none !important;

}

body .online__quality, .online__quality {

background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary)) !important;

font-weight: 700 !important;

color: var(--text-contrast) !important;

padding: 0.2em 0.5em !important;

border-radius: 0.3em !important;

text-shadow: none !important;

}

body .online__title, .online__title,

body .online__name, .online__name {

color: var(--theme-accent) !important;

text-shadow: 0 0 10px var(--theme-accent), 0 1px 3px rgba(0,0,0,0.5) !important;

font-weight: 600 !important;

}

body .online__tabs, .online__tabs,

body .online__tabs-item, .online__tabs-item {

background: rgba(var(--glass-bg), 0.45) !important;

border: 1.5px solid rgba(var(--glass-border), 0.4) !important;

border-radius: 1.5em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

backdrop-filter: blur(20px) saturate(180%) !important;

-webkit-backdrop-filter: blur(20px) saturate(180%) !important;

color: var(--text-main) !important;

}

body .online__tabs-item.focus, body .online__tabs-item:hover, body .online__tabs-item.active {

background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;

border: 2px solid var(--theme-accent) !important;

box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.5) !important;

color: var(--text-contrast) !important;

}

/* 肖袗袡袥蝎 袠 孝袨袪袪袝袧孝蝎 */

body .files, .files,

body .files__item, .files__item,

body .torrent-item, .torrent-item {

background: rgba(var(--glass-bg), 0.45) !important;

border: 1.5px solid rgba(var(--glass-border), 0.4) !important;

border-radius: 0.5em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

backdrop-filter: blur(20px) saturate(180%) !important;

-webkit-backdrop-filter: blur(20px) saturate(180%) !important;

color: var(--text-main) !important;

}

body .files__item.focus, body .files__item:hover,

body .torrent-item.focus, body .torrent-item:hover {

background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;

border: 2px solid var(--theme-accent) !important;

box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.6) !important;

transform: translateX(5px) translateZ(0) !important;

color: var(--text-contrast) !important;

backdrop-filter: blur(30px) saturate(200%) !important;

-webkit-backdrop-filter: blur(30px) saturate(200%) !important;

}

body .files__item *, .files__item *,

body .torrent-item *, .torrent-item * {

color: var(--text-main) !important;

text-shadow: none !important;

}

body .files__item.focus *, body .files__item:hover *,

body .torrent-item.focus *, body .torrent-item:hover * {

color: var(--text-contrast) !important;

text-shadow: none !important;

}

body .files__item-quality, .files__item-quality {

background: linear-gradient(135deg, var(--theme-primary), var(--theme-secondary)) !important;

font-weight: 700;

color: var(--text-contrast) !important;

padding: 0.2em 0.5em;

border-radius: 0.3em;

text-shadow: none !important;

}

/* 袪袗袟袦袝袪 肖袗袡袥袨袙/孝袨袪袪袝袧孝袨袙 - 效衼袪袧蝎袡 袙袨 袙小袝啸 孝袝袦袗啸 */

body .torrent-item__size, .torrent-item__size,

body .files__item-size, .files__item-size,

body .online__size, .online__size {

background: #ffffff !important;

color: #000000 !important;

font-weight: 700 !important;

padding: 0.2em 0.5em !important;

border-radius: 0.3em !important;

text-shadow: none !important;

border: 1px solid rgba(0,0,0,0.1) !important;

}

/* 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 - 孝袨袥鞋袣袨 袙袠袟校袗袥鞋袧蝎袝 小孝袠袥袠 */

.selectbox__content.layer--height,

.selectbox__head,

.selectbox__body.layer--wheight {

background: rgba(var(--bg-rgb), ${alpha}) !important;

backdrop-filter: blur(40px) saturate(180%) !important;

-webkit-backdrop-filter: blur(40px) saturate(180%) !important;

}

.selectbox__title {

color: var(--theme-accent) !important;

text-shadow: 0 0 15px var(--theme-accent), 0 2px 4px rgba(0,0,0,0.6) !important;

font-weight: 700 !important;

}

.selectbox-item.selector,

.simple-button.simple-button--filter.selector.filter--search,

.simple-button.simple-button--filter.selector.filter--sort {

background: var(--glass-bg, rgba(0,0,0,0.7)) !important;

border: 3px solid var(--theme-primary, #5a3494) !important;

color: var(--text-main) !important;

text-shadow: none !important;

border-radius: 2em !important;

}

.selectbox-item.selector.focus,

.selectbox-item.selector:hover,

.simple-button.simple-button--filter.selector.filter--search.focus,

.simple-button.simple-button--filter.selector.filter--search:hover,

.simple-button.simple-button--filter.selector.filter--sort.focus,

.simple-button.simple-button--filter.selector.filter--sort:hover {

background: var(--theme-primary, #5a3494) !important;

border: 3px solid var(--theme-accent, #0088bb) !important;

border-radius: 2.5em !important;

color: var(--text-contrast, #ffffff) !important;

box-shadow: 0 0 20px var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;

                transform: scale(1.02) !important;

border: 2px solid var(--theme-accent) !important;

box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.6) !important;

color: var(--text-contrast) !important;

text-shadow: 0 2px 4px rgba(0,0,0,0.7) !important;

font-weight: 600 !important;

}

/* 袧袗小孝袪袨袡袣袠 */

body .settings__content, .settings__content {

background: rgba(var(--glass-bg), ${alpha}) !important;

backdrop-filter: blur(40px) saturate(180%) !important;

-webkit-backdrop-filter: blur(40px) saturate(180%) !important;

border: 2px solid rgba(var(--glass-border), 0.5) !important;

border-radius: 1em !important;

}

body .settings-param__name, .settings-param__name {

background: transparent !important;

border: none !important;

color: var(--text-main) !important;

font-size: 1.1em !important;

line-height: 1.4 !important;

font-weight: 600 !important;

width: 100% !important;

text-align: left !important;

display: block !important;

margin-bottom: 0.3em !important;

}

body .settings-param__descr, .settings-param__descr {

background: transparent !important;

border: none !important;

color: var(--text-main) !important;

font-size: 0.85em !important;

line-height: 1.3 !important;

opacity: 0.8 !important;

width: 100% !important;

text-align: left !important;

display: block !important;

margin-top: 0.2em !important;

}

body .settings-param__value, .settings-param__value {

background: transparent !important;

border: none !important;

color: var(--text-main) !important;

font-size: 0.9em !important;

line-height: 1.4 !important;

padding: 0 !important;

width: auto !important;

text-align: left !important;

white-space: nowrap !important;

overflow: hidden !important;

text-overflow: ellipsis !important;

display: block !important;

margin-bottom: 0.3em !important;

font-weight: 500 !important;

}

body .settings-param, .settings-param,

body .settings-folder, .settings-folder {

background: rgba(var(--glass-bg), 0.45) !important;

border: 1.5px solid rgba(var(--glass-border), 0.4) !important;

border-radius: 0.8em !important;

padding: 0.6em 0.8em !important;

margin: 0.2em 0 !important;

min-height: auto !important;

transition: all 0.3s ease !important;

backdrop-filter: blur(20px) saturate(180%) !important;

-webkit-backdrop-filter: blur(20px) saturate(180%) !important;

color: var(--text-main) !important;

display: block !important;

}

/* 袗写邪锌褌邪褑懈褟 写谢褟 TV (Firestick 4K) */
@media (min-width: 1920px) {
    body .settings-param, .settings-param,
    body .settings-folder, .settings-folder {
        padding: 0.5em 0.6em !important;
        margin: 0.15em 0 !important;
        border-radius: 0.6em !important;
    }
    
    body .settings-param__name, .settings-param__name {
        font-size: 1em !important;
        margin-bottom: 0.2em !important;
    }
    
    body .settings-param__value, .settings-param__value {
        font-size: 0.85em !important;
        margin-bottom: 0.2em !important;
    }
    
    body .settings-param__descr, .settings-param__descr {
        font-size: 0.8em !important;
        margin-top: 0.1em !important;
    }
    
    /* 校褋懈谢械薪薪褘械 褉邪屑泻懈 锌芯褋褌械褉芯胁 写谢褟 TV */
    body .card.focus .card__view::after,
    body .card.hover .card__view::after {
        border-width: 0.5em !important;
        box-shadow: 0 0 40px var(--theme-primary, #5a3494) !important;
    }
    
    body .card.focus .card__view::after {
        border-color: var(--theme-accent, #0088bb) !important;
        box-shadow: 0 0 50px var(--theme-accent, #0088bb) !important;
    }
    
    /* 袠褋锌褉邪胁谢械薪懈械 褎芯泻褍褋邪 胁 谢械胁芯屑 屑械薪褞 薪邪 TV */
    body .menu__item {
        position: relative !important;
        z-index: 1000 !important;
    }
    
    body .menu__item.focus {
        z-index: 1001 !important;
        background: var(--theme-accent, #0088bb) !important;
        border: 2px solid var(--theme-primary, #5a3494) !important;
        box-shadow: 0 0 20px var(--theme-accent, #0088bb) !important;
    }
    
    /* 袩褉械写芯褌胁褉邪褖邪械屑 褍褏芯写 褎芯泻褍褋邪 薪邪 泻邪褉褌芯褔泻懈 */
    body .card {
        pointer-events: none !important;
    }
    
    body .card.focus {
        pointer-events: auto !important;
    }
}

body .settings-param.focus, body .settings-param:hover,

body .settings-folder.focus, body .settings-folder:hover {

background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;

border: 2px solid var(--theme-accent) !important;

box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.5) !important;

/* 校斜褉邪薪芯 褍胁械谢懈褔械薪懈械 锌褉懈 薪邪胁械写械薪懈懈 */

color: var(--text-contrast) !important;

}

body .settings-param.focus *, body .settings-param:hover *,

body .settings-folder.focus *, body .settings-folder:hover * {

color: var(--text-contrast) !important;

}

/* 袣袧袨袩袣袠 袙 袣袗袪孝袨效袣袝 肖袠袥鞋袦袗 */

body .full-start__button, .full-start__button {

background: linear-gradient(90deg, var(--theme-primary), var(--theme-secondary)) !important;

border: 2px solid var(--theme-accent) !important;

color: var(--text-contrast) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

backdrop-filter: blur(20px) saturate(180%) !important;

-webkit-backdrop-filter: blur(20px) saturate(180%) !important;

}

body .full-start__button.focus, body .full-start__button:hover {

background: linear-gradient(90deg, var(--theme-secondary), var(--theme-primary)) !important;

box-shadow: 0 4px 20px rgba(var(--primary-rgb), 0.7) !important;

transform: scale(var(--hover-scale, 1.05)) translateZ(0) !important;

}

body .full-start__button svg,

.full-start__button svg {

fill: var(--text-contrast) !important;

color: var(--text-contrast) !important;

}

/* 校袧袠袙袝袪小袗袥鞋袧袨袝 袩袪袗袙袠袥袨: 校斜懈褉邪械屑 芯斜胁芯写泻褍 写谢褟 褌械屑薪芯谐芯 褌械泻褋褌邪 胁芯 胁褋械褏 褌械屑邪褏 */
.button, .settings-param { 
.card__quality, .card__quality *, .card__type::after,
.head__action.focus, .head__action.focus *,
.head__action:hover, .head__action:hover *,
.menu__item.focus, .menu__item.focus *,
.menu__item:hover, .menu__item:hover *,
.settings-param.focus, .settings-param.focus *,
.settings-param:hover, .settings-param:hover *,
.files__item.focus, .files__item.focus *,
.files__item:hover, .files__item:hover *,
.torrent-item.focus, .torrent-item.focus *,
.torrent-item:hover, .torrent-item:hover *,
.filter__item.focus, .filter__item.focus *,
.filter__item:hover, .filter__item:hover *,
.sort__item.focus, .sort__item.focus *,
.sort__item:hover, .sort__item:hover *,
.selectbox-item.focus, .selectbox-item.focus *,
.selectbox-item:hover, .selectbox-item:hover *,
.online__item.focus, .online__item.focus *,
.online__item:hover, .online__item:hover *,
.online__item-line.focus, .online__item-line.focus *,
.online__item-line:hover, .online__item-line:hover *,
.online-prestige__item.focus, .online-prestige__item.focus *,
.online-prestige__item:hover, .online-prestige__item:hover *,
.online-prestige__line.focus, .online-prestige__line.focus *,
.online-prestige__line:hover, .online-prestige__line:hover *,
.online__tabs-item.focus, .online__tabs-item.focus *,
.online__tabs-item:hover, .online__tabs-item:hover *,
.card.focus, .card.focus *,
.card:hover, .card:hover * {
    text-shadow: none !important;
}

/* 校袧袠袙袝袪小袗袥鞋袧袨袝 袩袪袗袙袠袥袨: 袟邪锌褉械褖邪械屑 褋屑械薪褍 褑胁械褌邪 懈 胁械褋邪 褕褉懈褎褌邪 锌褉懈 hover/focus */
.settings-param:hover, .settings-param:focus, .settings-param.focus, .settings-param.hover,
.menu__item:hover, .menu__item:focus, .menu__item.focus, .menu__item.hover,
.files__item:hover, .files__item:focus, .files__item.focus, .files__item.hover,
.torrent-item:hover, .torrent-item:focus, .torrent-item.focus, .torrent-item.hover,
.filter__item:hover, .filter__item:focus, .filter__item.focus, .filter__item.hover,
.sort__item:hover, .sort__item:focus, .sort__item.focus, .sort__item.hover,
.selectbox-item:hover, .selectbox-item:focus, .selectbox-item.focus, .selectbox-item.hover,
.online__item:hover, .online__item:focus, .online__item.focus, .online__item.hover,
.online__item-line:hover, .online__item-line:focus, .online__item-line.focus, .online__item-line.hover,
.online-prestige__item:hover, .online-prestige__item:focus, .online-prestige__item.focus, .online-prestige__item.hover,
.online-prestige__line:hover, .online-prestige__line:focus, .online-prestige__line.focus, .online-prestige__line.hover,
.online__tabs-item:hover, .online__tabs-item:focus, .online__tabs-item.focus, .online__tabs-item.hover,
.card:hover, .card:focus, .card.focus, .card.hover,
.full-start__button:hover, .full-start__button:focus, .full-start__button.focus, .full-start__button.hover,
.head__action:hover, .head__action:focus, .head__action.focus, .head__action.hover,
.bottom-bar__item:hover, .bottom-bar__item:focus, .bottom-bar__item.focus, .bottom-bar__item.hover,
.bottom-bar__btn:hover, .bottom-bar__btn:focus, .bottom-bar__btn.focus, .bottom-bar__btn.hover,
.settings-folder:hover, .settings-folder:focus, .settings-folder.focus, .settings-folder.hover,
.drxaos-theme-quick-btn:hover, .drxaos-theme-quick-btn:focus, .drxaos-theme-quick-btn.focus, .drxaos-theme-quick-btn.hover,
.button:hover, .button:focus, .button.focus, .button.hover,
.settings-param:hover, .settings-param:focus, .settings-param.focus, .settings-param.hover {
    font-weight: inherit !important;
    text-shadow: none !important;
}

.button, .button *, .settings-param, .settings-param *,
.menu__item, .menu__item *,
.full-start__button, .full-start__button * {
    font-weight: inherit !important;
    text-shadow: none !important;
}

/* 校袧袠袙袝袪小袗袥鞋袧袨袝 袩袪袗袙袠袥袨: 袨褌泻谢褞褔邪械屑 袙小袝 褍胁械谢懈褔械薪懈褟 锌褉懈 薪邪胁械写械薪懈懈 */
*:hover, *:focus, *.focus, *.hover {
    transform: none !important;
}

.settings-param:hover *, .settings-param:focus *, .settings-param.focus *, .settings-param.hover *,
.menu__item:hover *, .menu__item:focus *, .menu__item.focus *, .menu__item.hover *,
.files__item:hover *, .files__item:focus *, .files__item.focus *, .files__item.hover *,
.torrent-item:hover *, .torrent-item:focus *, .torrent-item.focus *, .torrent-item.hover *,
.filter__item:hover *, .filter__item:focus *, .filter__item.focus *, .filter__item.hover *,
.sort__item:hover *, .sort__item:focus *, .sort__item.focus *, .sort__item.hover *,
.selectbox-item:hover *, .selectbox-item:focus *, .selectbox-item.focus *, .selectbox-item.hover *,
.online__item:hover *, .online__item:focus *, .online__item.focus *, .online__item.hover *,
.online__item-line:hover *, .online__item-line:focus *, .online__item-line.focus *, .online__item-line.hover *,
.online-prestige__item:hover *, .online-prestige__item:focus *, .online-prestige__item.focus *, .online-prestige__item.hover *,
.online-prestige__line:hover *, .online-prestige__line:focus *, .online-prestige__line.focus *, .online-prestige__line.hover *,
.online__tabs-item:hover *, .online__tabs-item:focus *, .online__tabs-item.focus *, .online__tabs-item.hover *,
.card:hover *, .card:focus *, .card.focus *, .card.hover *,
.full-start__button:hover *, .full-start__button:focus *, .full-start__button.focus *, .full-start__button.hover *,
.head__action:hover *, .head__action:focus *, .head__action.focus *, .head__action.hover *,
.bottom-bar__item:hover *, .bottom-bar__item:focus *, .bottom-bar__item.focus *, .bottom-bar__item.hover *,
.bottom-bar__btn:hover *, .bottom-bar__btn:focus *, .bottom-bar__btn.focus *, .bottom-bar__btn.hover *,
.settings-folder:hover *, .settings-folder:focus *, .settings-folder.focus *, .settings-folder.hover *,
.drxaos-theme-quick-btn:hover *, .drxaos-theme-quick-btn:focus *, .drxaos-theme-quick-btn.focus *, .drxaos-theme-quick-btn.hover * {
    font-weight: inherit !important;
    text-shadow: none !important;
}

/* 校袧袠袙袝袪小袗袥鞋袧袨袝 袩袪袗袙袠袥袨: 校斜懈褉邪械屑 芯斜胁芯写泻褍 写谢褟 胁褋械褏 褝谢械屑械薪褌芯胁 褋 褌械屑薪褘屑 褌械泻褋褌芯屑 */
*[style*="color: #000000"], *[style*="color:#000000"], 
*[style*="color: #001a1f"], *[style*="color:#001a1f"],
*[style*="color: #0a0a0a"], *[style*="color:#0a0a0a"],
*[style*="color: var(--text-contrast)"], 
.card__quality, .card__quality *, .card__type::after,
.head__action, .head__action *,
.menu__item, .menu__item *,
.settings-param, .settings-param *,
.files__item, .files__item *,
.torrent-item, .torrent-item *,
.filter__item, .filter__item *,
.sort__item, .sort__item *,
.selectbox-item, .selectbox-item *,
.online__item, .online__item *,
.online__item-line, .online__item-line *,
.online-prestige__item, .online-prestige__item *,
.online-prestige__line, .online-prestige__line *,
.online__tabs-item, .online__tabs-item *,
.card, .card *,
.bottom-bar__item, .bottom-bar__item *,
.bottom-bar__btn, .bottom-bar__btn *,
.settings-folder, .settings-folder *,
.drxaos-theme-quick-btn, .drxaos-theme-quick-btn * {
    text-shadow: none !important;
}

/* 袛袨袩袨袥袧袠孝袝袥鞋袧袨袝 袩袪袗袙袠袥袨: 校斜懈褉邪械屑 芯斜胁芯写泻褍 写谢褟 胁褋械褏 褝谢械屑械薪褌芯胁 褋 褌械屑薪褘屑 褑胁械褌芯屑 褌械泻褋褌邪 */
*[style*="color: #000"], *[style*="color:#000"],
*[style*="color: #001"], *[style*="color:#001"],
*[style*="color: #002"], *[style*="color:#002"],
*[style*="color: #003"], *[style*="color:#003"],
*[style*="color: #004"], *[style*="color:#004"],
*[style*="color: #005"], *[style*="color:#005"],
*[style*="color: #006"], *[style*="color:#006"],
*[style*="color: #007"], *[style*="color:#007"],
*[style*="color: #008"], *[style*="color:#008"],
*[style*="color: #009"], *[style*="color:#009"],
*[style*="color: #00a"], *[style*="color:#00a"],
*[style*="color: #00b"], *[style*="color:#00b"],
*[style*="color: #00c"], *[style*="color:#00c"],
*[style*="color: #00d"], *[style*="color:#00d"],
*[style*="color: #00e"], *[style*="color:#00e"],
*[style*="color: #00f"], *[style*="color:#00f"],
*[style*="color: #010"], *[style*="color:#010"],
*[style*="color: #020"], *[style*="color:#020"],
*[style*="color: #030"], *[style*="color:#030"],
*[style*="color: #040"], *[style*="color:#040"],
*[style*="color: #050"], *[style*="color:#050"],
*[style*="color: #060"], *[style*="color:#060"],
*[style*="color: #070"], *[style*="color:#070"],
*[style*="color: #080"], *[style*="color:#080"],
*[style*="color: #090"], *[style*="color:#090"],
*[style*="color: #0a0"], *[style*="color:#0a0"],
*[style*="color: #0b0"], *[style*="color:#0b0"],
*[style*="color: #0c0"], *[style*="color:#0c0"],
*[style*="color: #0d0"], *[style*="color:#0d0"],
*[style*="color: #0e0"], *[style*="color:#0e0"],
*[style*="color: #0f0"], *[style*="color:#0f0"],
*[style*="color: #100"], *[style*="color:#100"],
*[style*="color: #200"], *[style*="color:#200"],
*[style*="color: #300"], *[style*="color:#300"],
*[style*="color: #400"], *[style*="color:#400"],
*[style*="color: #500"], *[style*="color:#500"],
*[style*="color: #600"], *[style*="color:#600"],
*[style*="color: #700"], *[style*="color:#700"],
*[style*="color: #800"], *[style*="color:#800"],
*[style*="color: #900"], *[style*="color:#900"],
*[style*="color: #a00"], *[style*="color:#a00"],
*[style*="color: #b00"], *[style*="color:#b00"],
*[style*="color: #c00"], *[style*="color:#c00"],
*[style*="color: #d00"], *[style*="color:#d00"],
*[style*="color: #e00"], *[style*="color:#e00"],
*[style*="color: #f00"], *[style*="color:#f00"] {
    text-shadow: none !important;
}

/* 袦袗袣小袠袦袗袥鞋袧袨 校袧袠袙袝袪小袗袥鞋袧袨袝 袩袪袗袙袠袥袨: 校斜懈褉邪械屑 芯斜胁芯写泻褍 写谢褟 胁褋械褏 褌械屑薪褘褏 褑胁械褌芯胁 */
*[style*="color: rgb(0,"], *[style*="color:rgb(0,"],
*[style*="color: rgb(1,"], *[style*="color:rgb(1,"],
*[style*="color: rgb(2,"], *[style*="color:rgb(2,"],
*[style*="color: rgb(3,"], *[style*="color:rgb(3,"],
*[style*="color: rgb(4,"], *[style*="color:rgb(4,"],
*[style*="color: rgb(5,"], *[style*="color:rgb(5,"],
*[style*="color: rgb(6,"], *[style*="color:rgb(6,"],
*[style*="color: rgb(7,"], *[style*="color:rgb(7,"],
*[style*="color: rgb(8,"], *[style*="color:rgb(8,"],
*[style*="color: rgb(9,"], *[style*="color:rgb(9,"],
*[style*="color: rgb(10,"], *[style*="color:rgb(10,"],
*[style*="color: rgb(11,"], *[style*="color:rgb(11,"],
*[style*="color: rgb(12,"], *[style*="color:rgb(12,"],
*[style*="color: rgb(13,"], *[style*="color:rgb(13,"],
*[style*="color: rgb(14,"], *[style*="color:rgb(14,"],
*[style*="color: rgb(15,"], *[style*="color:rgb(15,"],
*[style*="color: rgb(16,"], *[style*="color:rgb(16,"],
*[style*="color: rgb(17,"], *[style*="color:rgb(17,"],
*[style*="color: rgb(18,"], *[style*="color:rgb(18,"],
*[style*="color: rgb(19,"], *[style*="color:rgb(19,"],
*[style*="color: rgb(20,"], *[style*="color:rgb(20,"],
*[style*="color: rgb(21,"], *[style*="color:rgb(21,"],
*[style*="color: rgb(22,"], *[style*="color:rgb(22,"],
*[style*="color: rgb(23,"], *[style*="color:rgb(23,"],
*[style*="color: rgb(24,"], *[style*="color:rgb(24,"],
*[style*="color: rgb(25,"], *[style*="color:rgb(25,"],
*[style*="color: rgb(26,"], *[style*="color:rgb(26,"],
*[style*="color: rgb(27,"], *[style*="color:rgb(27,"],
*[style*="color: rgb(28,"], *[style*="color:rgb(28,"],
*[style*="color: rgb(29,"], *[style*="color:rgb(29,"],
*[style*="color: rgb(30,"], *[style*="color:rgb(30,"],
*[style*="color: rgb(31,"], *[style*="color:rgb(31,"],
*[style*="color: rgb(32,"], *[style*="color:rgb(32,"],
*[style*="color: rgb(33,"], *[style*="color:rgb(33,"],
*[style*="color: rgb(34,"], *[style*="color:rgb(34,"],
*[style*="color: rgb(35,"], *[style*="color:rgb(35,"],
*[style*="color: rgb(0,0,0)"], *[style*="color:rgb(0,0,0)"],
*[style*="color: rgb(1,1,1)"], *[style*="color:rgb(1,1,1)"],
*[style*="color: rgb(2,2,2)"], *[style*="color:rgb(2,2,2)"],
*[style*="color: rgb(3,3,3)"], *[style*="color:rgb(3,3,3)"],
*[style*="color: rgb(4,4,4)"], *[style*="color:rgb(4,4,4)"],
*[style*="color: rgb(5,5,5)"], *[style*="color:rgb(5,5,5)"],
*[style*="color: rgb(6,6,6)"], *[style*="color:rgb(6,6,6)"],
*[style*="color: rgb(7,7,7)"], *[style*="color:rgb(7,7,7)"],
*[style*="color: rgb(8,8,8)"], *[style*="color:rgb(8,8,8)"],
*[style*="color: rgb(9,9,9)"], *[style*="color:rgb(9,9,9)"],
*[style*="color: rgb(10,10,10)"], *[style*="color:rgb(10,10,10)"],
*[style*="color: rgb(11,11,11)"], *[style*="color:rgb(11,11,11)"],
*[style*="color: rgb(12,12,12)"], *[style*="color:rgb(12,12,12)"],
*[style*="color: rgb(13,13,13)"], *[style*="color:rgb(13,13,13)"],
*[style*="color: rgb(14,14,14)"], *[style*="color:rgb(14,14,14)"],
*[style*="color: rgb(15,15,15)"], *[style*="color:rgb(15,15,15)"],
*[style*="color: rgb(16,16,16)"], *[style*="color:rgb(16,16,16)"],
*[style*="color: rgb(17,17,17)"], *[style*="color:rgb(17,17,17)"],
*[style*="color: rgb(18,18,18)"], *[style*="color:rgb(18,18,18)"],
*[style*="color: rgb(19,19,19)"], *[style*="color:rgb(19,19,19)"],
*[style*="color: rgb(20,20,20)"], *[style*="color:rgb(20,20,20)"],
*[style*="color: rgb(21,21,21)"], *[style*="color:rgb(21,21,21)"],
*[style*="color: rgb(22,22,22)"], *[style*="color:rgb(22,22,22)"],
*[style*="color: rgb(23,23,23)"], *[style*="color:rgb(23,23,23)"],
*[style*="color: rgb(24,24,24)"], *[style*="color:rgb(24,24,24)"],
*[style*="color: rgb(25,25,25)"], *[style*="color:rgb(25,25,25)"],
*[style*="color: rgb(26,26,26)"], *[style*="color:rgb(26,26,26)"],
*[style*="color: rgb(27,27,27)"], *[style*="color:rgb(27,27,27)"],
*[style*="color: rgb(28,28,28)"], *[style*="color:rgb(28,28,28)"],
*[style*="color: rgb(29,29,29)"], *[style*="color:rgb(29,29,29)"],
*[style*="color: rgb(30,30,30)"], *[style*="color:rgb(30,30,30)"],
*[style*="color: rgb(31,31,31)"], *[style*="color:rgb(31,31,31)"],
*[style*="color: rgb(32,32,32)"], *[style*="color:rgb(32,32,32)"],
*[style*="color: rgb(33,33,33)"], *[style*="color:rgb(33,33,33)"],
*[style*="color: rgb(34,34,34)"], *[style*="color:rgb(34,34,34)"],
*[style*="color: rgb(35,35,35)"], *[style*="color:rgb(35,35,35)"] {
    text-shadow: none !important;
}

`;

var style = $('<style id="drxaos_theme_style"></style>');

var themes = {

cyberpunk: `

/* 楔褉懈褎褌褘 蟹邪谐褉褍卸邪褞褌褋褟 谐谢芯斜邪谢褜薪芯 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈 */

:root {

--theme-primary: #5a3494;

--theme-secondary: #0088bb;

--theme-accent: #00b8d4;

--text-contrast: #ffffff;

--text-main: #d4e9f0;

--font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

--font-weight: 400;

--primary-rgb: 0, 184, 212;

--bg-rgb: 18, 14, 28;

--glass-bg: 28, 23, 42;

--glass-border: 90, 52, 144;

}

.card__title, .card__title * { color: #00B8D4 !important; text-shadow: 0 0 8px rgba(0,184,212,0.5), 0 1px 3px rgba(0,0,0,0.6) !important; font-weight: 600; }

.full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #A8D8E8 !important; text-shadow: none !important; }

.card__description, .card__description *, .info__line, .info__line * { color: #D4E9F0 !important; text-shadow: none !important; }

html, body, .extensions {

background: linear-gradient(135deg, #0a0a1e 0%, #14091c 25%, #22072e 50%, #14091c 75%, #0a0a1e 100%) !important;

background-size: 400% 400% !important;

animation: gradientShift 20s ease infinite !important;

}

@keyframes gradientShift {

0%, 100% { background-position: 0% 50%; }

50% { background-position: 100% 50%; }

}

body .head__action, .head__action {

background: rgba(90,52,148,0.3) !important;

backdrop-filter: blur(20px) saturate(180%) !important;

border: 1.5px solid rgba(90,52,148,0.45) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .head__action.focus, body .head__action:hover {

background: linear-gradient(45deg, #5a3494, #0088bb) !important;

box-shadow: 0 0 12px rgba(0,136,187,0.5) !important;

}

/* 校袘袪袗袥袠 袙小袝 小孝袠袥袠 袩袥袝袝袪袗 - 袙袨袟袙袪袗些袗袝袦 袣 袛袝肖袨袥孝袧袨袦校 小袨小孝袨携袧袠挟 LAMPA */

transform: scale(var(--hover-scale, 1.08)) translateZ(0) !important;

}

body .navigation-bar__body, .navigation-bar__body {

background: rgba(18,14,28,${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-bottom: 2px solid #0088bb !important;

}


.card__quality, .card__type::after {

background: linear-gradient(135deg, #5a3494, #0088bb) !important;

font-weight: 700;

color: #FFFFFF !important;

text-shadow: none !important;

}

::-webkit-scrollbar { width: 8px; }

::-webkit-scrollbar-track { background: rgba(90,52,148,0.12) !important; }

::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #5a3494, #0088bb) !important; border-radius: 4px; }


/* === LOADER - 袙小袝 孝袠袩蝎 === */

.activity__loader,
.loader,
.loader__icon,
.broadcast__loader,
.player__loader,
.selector__loader,
.torrent-item__loader,
.files__loader,
.online__loader,
.full-start__loader,
.modal-loading,
body .activity__loader,
body .loader,
body .loader__icon,
body .broadcast__loader,
body .player__loader,
body .selector__loader,
body .torrent-item__loader,
body .files__loader,
body .online__loader,
body .modal-loading {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E") no-repeat 50% 50% !important;
    background-size: contain !important;
}

/* 小锌械褑懈邪谢褜薪褘泄 褋褌懈谢褜 写谢褟 .modal-loading */
.modal-loading,
body .modal-loading {
    height: 6em !important;
}

/* 小泻褉褘胁邪械屑 胁薪褍褌褉械薪薪芯褋褌懈 loader */
.loader::before,
.loader::after,
.loader svg,
.loader > *,
.loader__icon::before,
.loader__icon::after,
.loader__icon svg,
.loader__icon > * {
    display: none !important;
}

/* === 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 === */

.modal,
.modal__content,
body .modal,
body .modal__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(50px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15) !important;
}

.modal__head,
body .modal__head {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.25), rgba(var(--primary-rgb), 0.15)) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(var(--primary-rgb), 0.3) !important;
    padding: 1.5em 2em !important;
    border-radius: 2em 2em 0 0 !important;
}

.modal__body,
body .modal__body {
    background: transparent !important;
    padding: 2em !important;
}

.about,
body .about {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.92)) !important;
    backdrop-filter: blur(45px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(45px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12) !important;
    padding: 2em !important;
}

.console,
body .console {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.96)) !important;
    backdrop-filter: blur(35px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(35px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.35) !important;
    border-radius: 2em !important;
    font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
    font-weight: 400 !important;
}

/* 小锌械褑懈邪谢褜薪褘械 锌褉邪胁懈谢邪 写谢褟 泻芯薪褋芯谢懈 薪邪 屑芯斜懈谢褜薪褘褏 褍褋褌褉芯泄褋褌胁邪褏 */
@media (max-width: 768px) {
    .console,
    body .console,
    .console *,
    .console_line,
    .console_line * {
        font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
        font-size: 0.9em !important;
        line-height: 1.4 !important;
        letter-spacing: 0.5px !important;
    }
}
}

.console_line,
.console_line.selector,
body .console_line,
body .console_line.selector {
    background: rgba(255,255,255,0.03) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 0.5em !important;
    padding: 0.5em 1em !important;
    margin: 0.2em 0 !important;
    transition: all 0.3s ease !important;
}

.console_line:hover,
.console_line.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.15)) !important;
    border-color: rgba(var(--primary-rgb), 0.4) !important;
}

.console_tab,
.console_tab.selector,
body .console_tab,
body .console_tab.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.8em !important;
    padding: 0.7em 1.5em !important;
    margin: 0.4em !important;
    transition: all 0.3s ease !important;
}

.console_tab:hover,
.console_tab.focus,
.console_tab.selector.active {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.3)) !important;
    border-color: rgba(var(--primary-rgb), 0.6) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions,
body .extensions {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15), rgba(0,0,0,0.93)) !important;
    backdrop-filter: blur(40px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.38) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6) !important;
}

.extensions__block-add,
.extensions__block-add.selector,
body .extensions__block-add,
body .extensions__block-add.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 1.2em !important;
    padding: 1.2em !important;
    margin: 0.8em 0 !important;
    transition: all 0.3s ease !important;
}

.extensions__block-add:hover,
.extensions__block-add.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions__item,
body .extensions__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.extensions__item:hover,
.extensions__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

.selector__item,
body .selector__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em 1.5em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.selector__item:hover,
.selector__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

/* === 袩袨袥携 袙袙袨袛袗 袧袗小孝袪袨袝袣 === */

.settings-input__content,
body .settings-input__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(var(--primary-rgb), 0.25) !important;
    border-radius: 0.8em !important;
    padding: 1.5em !important;
    transition: all 0.3s ease !important;
}

.settings-input__content:focus,
.settings-input__content.focus {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.95)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
}

${commonStyles}

`,

matrix: `

/* 楔褉懈褎褌褘 蟹邪谐褉褍卸邪褞褌褋褟 谐谢芯斜邪谢褜薪芯 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈 */

:root {

--theme-primary: #00b328;

--theme-secondary: #008a20;

--theme-accent: #28e850;

--text-contrast: #000000;

--text-main: #00b328;

--font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

--primary-rgb: 0, 179, 40;

--bg-rgb: 0, 16, 0;

--glass-bg: 0, 26, 0;

--glass-border: 0, 179, 40;

}

/* 袠小袣袥挟效袗袝袦 袩袥袝袝袪 袠袟 袚袥袨袘袗袥鞋袧蝎啸 楔袪袠肖孝袨袙 - 袙袨袟袙袪袗些袗袝袦 袛袝肖袨袥孝袧蝎袡 楔袪袠肖孝 LAMPA */

.card__title, .card__title * { color: #00B328 !important; text-shadow: 0 0 10px rgba(0,179,40,0.7), 0 1px 3px rgba(0,0,0,0.8) !important; font-weight: 700; }

.full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #00B328 !important; text-shadow: none !important; }

.card__description, .card__description *, .info__line, .info__line * { color: #A8D882 !important; text-shadow: none !important; }

html, body, .extensions {

background: linear-gradient(135deg, #000 0%, #001200 25%, #002400 50%, #001200 75%, #000 100%) !important;

background-size: 400% 400% !important;

animation: gradientShift 15s ease infinite !important;

}

body .head__action, .head__action {

background: rgba(0,179,40,0.18) !important;

backdrop-filter: blur(20px) saturate(180%) !important;

border: 1.5px solid rgba(0,179,40,0.35) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .head__action.focus, body .head__action:hover {

background: linear-gradient(45deg, #00b328, #28e850) !important;

box-shadow: 0 0 12px rgba(0,179,40,0.6) !important;

transform: scale(var(--hover-scale, 1.08)) translateZ(0) !important;

}

body .navigation-bar__body, .navigation-bar__body {

background: rgba(0,16,0,${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-bottom: 2px solid #00b328 !important;

}


.card__quality, .card__type::after {

background: linear-gradient(135deg, #00b328, #008a20) !important;

color: #000 !important;

font-weight: 700;

}

::-webkit-scrollbar-track { background: rgba(0,179,40,0.12) !important; }

::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #00b328, #008a20) !important; }


/* === LOADER - 袙小袝 孝袠袩蝎 === */

.activity__loader,
.loader,
.loader__icon,
.broadcast__loader,
.player__loader,
.selector__loader,
.torrent-item__loader,
.files__loader,
.online__loader,
.full-start__loader,
.modal-loading,
body .activity__loader,
body .loader,
body .loader__icon,
body .broadcast__loader,
body .player__loader,
body .selector__loader,
body .torrent-item__loader,
body .files__loader,
body .online__loader,
body .modal-loading {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E") no-repeat 50% 50% !important;
    background-size: contain !important;
}

/* 小锌械褑懈邪谢褜薪褘泄 褋褌懈谢褜 写谢褟 .modal-loading */
.modal-loading,
body .modal-loading {
    height: 6em !important;
}

/* 小泻褉褘胁邪械屑 胁薪褍褌褉械薪薪芯褋褌懈 loader */
.loader::before,
.loader::after,
.loader svg,
.loader > *,
.loader__icon::before,
.loader__icon::after,
.loader__icon svg,
.loader__icon > * {
    display: none !important;
}

/* === 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 === */

.modal,
.modal__content,
body .modal,
body .modal__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(50px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15) !important;
}

.modal__head,
body .modal__head {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.25), rgba(var(--primary-rgb), 0.15)) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(var(--primary-rgb), 0.3) !important;
    padding: 1.5em 2em !important;
    border-radius: 2em 2em 0 0 !important;
}

.modal__body,
body .modal__body {
    background: transparent !important;
    padding: 2em !important;
}

.about,
body .about {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.92)) !important;
    backdrop-filter: blur(45px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(45px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12) !important;
    padding: 2em !important;
}

.console,
body .console {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.96)) !important;
    backdrop-filter: blur(35px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(35px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.35) !important;
    border-radius: 2em !important;
    font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
    font-weight: 400 !important;
}

/* 小锌械褑懈邪谢褜薪褘械 锌褉邪胁懈谢邪 写谢褟 泻芯薪褋芯谢懈 薪邪 屑芯斜懈谢褜薪褘褏 褍褋褌褉芯泄褋褌胁邪褏 */
@media (max-width: 768px) {
    .console,
    body .console,
    .console *,
    .console_line,
    .console_line * {
        font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
        font-size: 0.9em !important;
        line-height: 1.4 !important;
        letter-spacing: 0.5px !important;
    }
}
}

.console_line,
.console_line.selector,
body .console_line,
body .console_line.selector {
    background: rgba(255,255,255,0.03) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 0.5em !important;
    padding: 0.5em 1em !important;
    margin: 0.2em 0 !important;
    transition: all 0.3s ease !important;
}

.console_line:hover,
.console_line.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.15)) !important;
    border-color: rgba(var(--primary-rgb), 0.4) !important;
}

.console_tab,
.console_tab.selector,
body .console_tab,
body .console_tab.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.8em !important;
    padding: 0.7em 1.5em !important;
    margin: 0.4em !important;
    transition: all 0.3s ease !important;
}

.console_tab:hover,
.console_tab.focus,
.console_tab.selector.active {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.3)) !important;
    border-color: rgba(var(--primary-rgb), 0.6) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions,
body .extensions {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15), rgba(0,0,0,0.93)) !important;
    backdrop-filter: blur(40px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.38) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6) !important;
}

.extensions__block-add,
.extensions__block-add.selector,
body .extensions__block-add,
body .extensions__block-add.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 1.2em !important;
    padding: 1.2em !important;
    margin: 0.8em 0 !important;
    transition: all 0.3s ease !important;
}

.extensions__block-add:hover,
.extensions__block-add.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions__item,
body .extensions__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.extensions__item:hover,
.extensions__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

.selector__item,
body .selector__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em 1.5em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.selector__item:hover,
.selector__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

/* === 袩袨袥携 袙袙袨袛袗 袧袗小孝袪袨袝袣 === */

.settings-input__content,
body .settings-input__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(var(--primary-rgb), 0.25) !important;
    border-radius: 0.8em !important;
    padding: 1.5em !important;
    transition: all 0.3s ease !important;
}

.settings-input__content:focus,
.settings-input__content.focus {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.95)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
}

${commonStyles}

`,

retrowave: `

/* 楔褉懈褎褌褘 蟹邪谐褉褍卸邪褞褌褋褟 谐谢芯斜邪谢褜薪芯 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈 */

:root {

--theme-primary: #c11850;

--theme-secondary: #8a23a0;

--theme-accent: #00c4e6;

--text-contrast: #ffffff;

--text-main: #eee;

--font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

--primary-rgb: 193, 24, 80;

--bg-rgb: 26, 1, 42;

--glass-bg: 38, 5, 56;

--glass-border: 193, 24, 80;

}

/* 袠小袣袥挟效袗袝袦 袩袥袝袝袪 袠袟 袚袥袨袘袗袥鞋袧蝎啸 楔袪袠肖孝袨袙 - 袙袨袟袙袪袗些袗袝袦 袛袝肖袨袥孝袧蝎袡 楔袪袠肖孝 LAMPA */

.card__title, .card__title * { color: #00C4E6 !important; text-shadow: 0 0 12px rgba(0,196,230,0.8), 0 1px 3px rgba(0,0,0,0.7) !important; font-weight: 700; }

.full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #D4E8F5 !important; text-shadow: none !important; }

.card__description, .card__description *, .info__line, .info__line * { color: #EDD8F5 !important; text-shadow: none !important; }

html, body, .extensions {

background: linear-gradient(135deg, #0d0221 0%, #1a012e 20%, #220734 40%, #360c3e 60%, #220734 80%, #0d0221 100%) !important;

background-size: 400% 400% !important;

animation: gradientShift 25s ease infinite !important;

}

body .head__action, .head__action {

background: rgba(138,35,160,0.25) !important;

backdrop-filter: blur(20px) saturate(180%) !important;

border: 1.5px solid rgba(193,24,80,0.45) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .head__action.focus, body .head__action:hover {

background: linear-gradient(45deg, #c11850, #8a23a0, #00c4e6) !important;

box-shadow: 0 0 12px rgba(193,24,80,0.6) !important;

transform: scale(var(--hover-scale, 1.08)) translateZ(0) !important;

}

body .navigation-bar__body, .navigation-bar__body {

background: rgba(26,1,42,${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-bottom: 3px solid transparent !important;

border-image: linear-gradient(90deg, #c11850, #8a23a0, #00c4e6) 1 !important;

}


.card__quality, .card__type::after {

background: linear-gradient(135deg, #c11850, #8a23a0, #00c4e6) !important;

font-weight: 800;

color: #FFF !important;

text-shadow: none !important;

}

::-webkit-scrollbar-track { background: rgba(138,35,160,0.12) !important; }

::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #c11850, #8a23a0, #00c4e6) !important; }


/* === LOADER - 袙小袝 孝袠袩蝎 === */

.activity__loader,
.loader,
.loader__icon,
.broadcast__loader,
.player__loader,
.selector__loader,
.torrent-item__loader,
.files__loader,
.online__loader,
.full-start__loader,
.modal-loading,
body .activity__loader,
body .loader,
body .loader__icon,
body .broadcast__loader,
body .player__loader,
body .selector__loader,
body .torrent-item__loader,
body .files__loader,
body .online__loader,
body .modal-loading {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E") no-repeat 50% 50% !important;
    background-size: contain !important;
}

/* 小锌械褑懈邪谢褜薪褘泄 褋褌懈谢褜 写谢褟 .modal-loading */
.modal-loading,
body .modal-loading {
    height: 6em !important;
}

/* 小泻褉褘胁邪械屑 胁薪褍褌褉械薪薪芯褋褌懈 loader */
.loader::before,
.loader::after,
.loader svg,
.loader > *,
.loader__icon::before,
.loader__icon::after,
.loader__icon svg,
.loader__icon > * {
    display: none !important;
}

/* === 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 === */

.modal,
.modal__content,
body .modal,
body .modal__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(50px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15) !important;
}

.modal__head,
body .modal__head {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.25), rgba(var(--primary-rgb), 0.15)) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(var(--primary-rgb), 0.3) !important;
    padding: 1.5em 2em !important;
    border-radius: 2em 2em 0 0 !important;
}

.modal__body,
body .modal__body {
    background: transparent !important;
    padding: 2em !important;
}

.about,
body .about {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.92)) !important;
    backdrop-filter: blur(45px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(45px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12) !important;
    padding: 2em !important;
}

.console,
body .console {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.96)) !important;
    backdrop-filter: blur(35px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(35px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.35) !important;
    border-radius: 2em !important;
    font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
    font-weight: 400 !important;
}

/* 小锌械褑懈邪谢褜薪褘械 锌褉邪胁懈谢邪 写谢褟 泻芯薪褋芯谢懈 薪邪 屑芯斜懈谢褜薪褘褏 褍褋褌褉芯泄褋褌胁邪褏 */
@media (max-width: 768px) {
    .console,
    body .console,
    .console *,
    .console_line,
    .console_line * {
        font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
        font-size: 0.9em !important;
        line-height: 1.4 !important;
        letter-spacing: 0.5px !important;
    }
}
}

.console_line,
.console_line.selector,
body .console_line,
body .console_line.selector {
    background: rgba(255,255,255,0.03) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 0.5em !important;
    padding: 0.5em 1em !important;
    margin: 0.2em 0 !important;
    transition: all 0.3s ease !important;
}

.console_line:hover,
.console_line.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.15)) !important;
    border-color: rgba(var(--primary-rgb), 0.4) !important;
}

.console_tab,
.console_tab.selector,
body .console_tab,
body .console_tab.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.8em !important;
    padding: 0.7em 1.5em !important;
    margin: 0.4em !important;
    transition: all 0.3s ease !important;
}

.console_tab:hover,
.console_tab.focus,
.console_tab.selector.active {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.3)) !important;
    border-color: rgba(var(--primary-rgb), 0.6) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions,
body .extensions {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15), rgba(0,0,0,0.93)) !important;
    backdrop-filter: blur(40px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.38) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6) !important;
}

.extensions__block-add,
.extensions__block-add.selector,
body .extensions__block-add,
body .extensions__block-add.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 1.2em !important;
    padding: 1.2em !important;
    margin: 0.8em 0 !important;
    transition: all 0.3s ease !important;
}

.extensions__block-add:hover,
.extensions__block-add.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions__item,
body .extensions__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.extensions__item:hover,
.extensions__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

.selector__item,
body .selector__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em 1.5em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.selector__item:hover,
.selector__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

/* === 袩袨袥携 袙袙袨袛袗 袧袗小孝袪袨袝袣 === */

.settings-input__content,
body .settings-input__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(var(--primary-rgb), 0.25) !important;
    border-radius: 0.8em !important;
    padding: 1.5em !important;
    transition: all 0.3s ease !important;
}

.settings-input__content:focus,
.settings-input__content.focus {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.95)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
}

${commonStyles}

`,

iceblue: `

/* 楔褉懈褎褌褘 蟹邪谐褉褍卸邪褞褌褋褟 谐谢芯斜邪谢褜薪芯 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈 */

:root {

--theme-primary: #0088bb;

--theme-secondary: #00b8cc;

--theme-accent: #3ac8d4;

--text-contrast: #001a1f;

--text-main: #ffffff;

--font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

--primary-rgb: 0, 136, 187;

--bg-rgb: 0, 22, 32;

--glass-bg: 0, 32, 44;

--glass-border: 0, 136, 187;

}

/* 袠小袣袥挟效袗袝袦 袩袥袝袝袪 袠袟 袚袥袨袘袗袥鞋袧蝎啸 楔袪袠肖孝袨袙 - 袙袨袟袙袪袗些袗袝袦 袛袝肖袨袥孝袧蝎袡 楔袪袠肖孝 LAMPA */

.card__title, .card__title * { color: #00B8CC !important; text-shadow: 0 0 10px rgba(0,184,204,0.7), 0 1px 3px rgba(0,0,0,0.7) !important; font-weight: 600; }

.full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #00B8CC !important; text-shadow: none !important; }

.card__description, .card__description *, .info__line, .info__line * { color: #A8D4E0 !important; text-shadow: none !important; }

html, body, .extensions {

background: linear-gradient(135deg, #001218 0%, #002232 30%, #003446 50%, #002232 70%, #001218 100%) !important;

background-size: 400% 400% !important;

animation: gradientShift 18s ease infinite !important;

}

body .head__action, .head__action {

background: rgba(0,136,187,0.25) !important;

backdrop-filter: blur(20px) saturate(180%) !important;

border: 1.5px solid rgba(0,136,187,0.45) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .head__action.focus, body .head__action:hover {

background: linear-gradient(45deg, #0088bb, #00b8cc) !important;

box-shadow: 0 0 12px rgba(0,184,204,0.6) !important;

transform: scale(var(--hover-scale, 1.08)) translateZ(0) !important;

}

body .navigation-bar__body, .navigation-bar__body {

background: rgba(0,22,32,${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-bottom: 2px solid #0088bb !important;

}

.card__quality, .card__type::after {

background: linear-gradient(135deg, #0088bb, #00b8cc) !important;

font-weight: 700;

color: #001a1f !important;

}

::-webkit-scrollbar-track { background: rgba(0,136,187,0.12) !important; }

::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #0088bb, #00b8cc) !important; }


/* === LOADER - 袙小袝 孝袠袩蝎 === */

.activity__loader,
.loader,
.loader__icon,
.broadcast__loader,
.player__loader,
.selector__loader,
.torrent-item__loader,
.files__loader,
.online__loader,
.full-start__loader,
.modal-loading,
body .activity__loader,
body .loader,
body .loader__icon,
body .broadcast__loader,
body .player__loader,
body .selector__loader,
body .torrent-item__loader,
body .files__loader,
body .online__loader,
body .modal-loading {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E") no-repeat 50% 50% !important;
    background-size: contain !important;
}

/* 小锌械褑懈邪谢褜薪褘泄 褋褌懈谢褜 写谢褟 .modal-loading */
.modal-loading,
body .modal-loading {
    height: 6em !important;
}

/* 小泻褉褘胁邪械屑 胁薪褍褌褉械薪薪芯褋褌懈 loader */
.loader::before,
.loader::after,
.loader svg,
.loader > *,
.loader__icon::before,
.loader__icon::after,
.loader__icon svg,
.loader__icon > * {
    display: none !important;
}

/* === 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 === */

.modal,
.modal__content,
body .modal,
body .modal__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(50px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15) !important;
}

.modal__head,
body .modal__head {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.25), rgba(var(--primary-rgb), 0.15)) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(var(--primary-rgb), 0.3) !important;
    padding: 1.5em 2em !important;
    border-radius: 2em 2em 0 0 !important;
}

.modal__body,
body .modal__body {
    background: transparent !important;
    padding: 2em !important;
}

.about,
body .about {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.92)) !important;
    backdrop-filter: blur(45px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(45px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12) !important;
    padding: 2em !important;
}

.console,
body .console {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.96)) !important;
    backdrop-filter: blur(35px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(35px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.35) !important;
    border-radius: 2em !important;
    font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
    font-weight: 400 !important;
}

/* 小锌械褑懈邪谢褜薪褘械 锌褉邪胁懈谢邪 写谢褟 泻芯薪褋芯谢懈 薪邪 屑芯斜懈谢褜薪褘褏 褍褋褌褉芯泄褋褌胁邪褏 */
@media (max-width: 768px) {
    .console,
    body .console,
    .console *,
    .console_line,
    .console_line * {
        font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
        font-size: 0.9em !important;
        line-height: 1.4 !important;
        letter-spacing: 0.5px !important;
    }
}
}

.console_line,
.console_line.selector,
body .console_line,
body .console_line.selector {
    background: rgba(255,255,255,0.03) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 0.5em !important;
    padding: 0.5em 1em !important;
    margin: 0.2em 0 !important;
    transition: all 0.3s ease !important;
}

.console_line:hover,
.console_line.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.15)) !important;
    border-color: rgba(var(--primary-rgb), 0.4) !important;
}

.console_tab,
.console_tab.selector,
body .console_tab,
body .console_tab.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.8em !important;
    padding: 0.7em 1.5em !important;
    margin: 0.4em !important;
    transition: all 0.3s ease !important;
}

.console_tab:hover,
.console_tab.focus,
.console_tab.selector.active {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.3)) !important;
    border-color: rgba(var(--primary-rgb), 0.6) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions,
body .extensions {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15), rgba(0,0,0,0.93)) !important;
    backdrop-filter: blur(40px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.38) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6) !important;
}

.extensions__block-add,
.extensions__block-add.selector,
body .extensions__block-add,
body .extensions__block-add.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 1.2em !important;
    padding: 1.2em !important;
    margin: 0.8em 0 !important;
    transition: all 0.3s ease !important;
}

.extensions__block-add:hover,
.extensions__block-add.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions__item,
body .extensions__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.extensions__item:hover,
.extensions__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

.selector__item,
body .selector__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em 1.5em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.selector__item:hover,
.selector__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

/* === 袩袨袥携 袙袙袨袛袗 袧袗小孝袪袨袝袣 === */

.settings-input__content,
body .settings-input__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(var(--primary-rgb), 0.25) !important;
    border-radius: 0.8em !important;
    padding: 1.5em !important;
    transition: all 0.3s ease !important;
}

.settings-input__content:focus,
.settings-input__content.focus {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.95)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
}

${commonStyles}

`,

monochrome: `

/* 楔褉懈褎褌褘 蟹邪谐褉褍卸邪褞褌褋褟 谐谢芯斜邪谢褜薪芯 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈 */

:root {

--theme-primary: #d9d9d9;

--theme-secondary: #bfbfbf;

--theme-accent: #f5f5f5;

--text-contrast: #0a0a0a;

--text-main: #e6e6e6;

--font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

--primary-rgb: 217, 217, 217;

--bg-rgb: 10, 10, 10;

--glass-bg: 26, 26, 26;

--glass-border: 217, 217, 217;

}

/* 袠小袣袥挟效袗袝袦 袩袥袝袝袪 袠袟 袚袥袨袘袗袥鞋袧蝎啸 楔袪袠肖孝袨袙 - 袙袨袟袙袪袗些袗袝袦 袛袝肖袨袥孝袧蝎袡 楔袪袠肖孝 LAMPA */

.card__title, .card__title * { color: #F5F5F5 !important; text-shadow: 0 0 8px rgba(245,245,245,0.5), 0 1px 3px rgba(0,0,0,0.8) !important; font-weight: 600; }

.full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #E6E6E6 !important; text-shadow: none !important; }

.card__description, .card__description *, .info__line, .info__line * { color: #D1D1D1 !important; text-shadow: none !important; }

html, body, .extensions {

background: linear-gradient(135deg, #0a0a0a 0%, #161616 30%, #222222 50%, #161616 70%, #0a0a0a 100%) !important;

background-size: 400% 400% !important;

animation: gradientShift 20s ease infinite !important;

}

body .head__action, .head__action {

background: rgba(217,217,217,0.15) !important;

backdrop-filter: blur(20px) saturate(180%) !important;

border: 1.5px solid rgba(217,217,217,0.3) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .head__action.focus, body .head__action:hover {

background: linear-gradient(45deg, #d9d9d9, #bfbfbf) !important;

box-shadow: 0 0 12px rgba(217,217,217,0.5) !important;

transform: scale(var(--hover-scale, 1.08)) translateZ(0) !important;

}

body .navigation-bar__body, .navigation-bar__body {

background: rgba(10,10,10,${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-bottom: 2px solid #d9d9d9 !important;

}


font-weight: 600;

}

.card__quality, .card__type::after {

background: linear-gradient(135deg, #d9d9d9, #bfbfbf) !important;

font-weight: 700;

color: #0a0a0a !important;

}

::-webkit-scrollbar-track { background: rgba(217,217,217,0.08) !important; }

::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #d9d9d9, #bfbfbf) !important; }


/* === LOADER - 袙小袝 孝袠袩蝎 === */

.activity__loader,
.loader,
.loader__icon,
.broadcast__loader,
.player__loader,
.selector__loader,
.torrent-item__loader,
.files__loader,
.online__loader,
.full-start__loader,
.modal-loading,
body .activity__loader,
body .loader,
body .loader__icon,
body .broadcast__loader,
body .player__loader,
body .selector__loader,
body .torrent-item__loader,
body .files__loader,
body .online__loader,
body .modal-loading {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E") no-repeat 50% 50% !important;
    background-size: contain !important;
}

/* 小锌械褑懈邪谢褜薪褘泄 褋褌懈谢褜 写谢褟 .modal-loading */
.modal-loading,
body .modal-loading {
    height: 6em !important;
}

/* 小泻褉褘胁邪械屑 胁薪褍褌褉械薪薪芯褋褌懈 loader */
.loader::before,
.loader::after,
.loader svg,
.loader > *,
.loader__icon::before,
.loader__icon::after,
.loader__icon svg,
.loader__icon > * {
    display: none !important;
}

/* === 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 === */

.modal,
.modal__content,
body .modal,
body .modal__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(50px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15) !important;
}

.modal__head,
body .modal__head {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.25), rgba(var(--primary-rgb), 0.15)) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(var(--primary-rgb), 0.3) !important;
    padding: 1.5em 2em !important;
    border-radius: 2em 2em 0 0 !important;
}

.modal__body,
body .modal__body {
    background: transparent !important;
    padding: 2em !important;
}

.about,
body .about {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.92)) !important;
    backdrop-filter: blur(45px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(45px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12) !important;
    padding: 2em !important;
}

.console,
body .console {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.96)) !important;
    backdrop-filter: blur(35px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(35px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.35) !important;
    border-radius: 2em !important;
    font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
    font-weight: 400 !important;
}

/* 小锌械褑懈邪谢褜薪褘械 锌褉邪胁懈谢邪 写谢褟 泻芯薪褋芯谢懈 薪邪 屑芯斜懈谢褜薪褘褏 褍褋褌褉芯泄褋褌胁邪褏 */
@media (max-width: 768px) {
    .console,
    body .console,
    .console *,
    .console_line,
    .console_line * {
        font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
        font-size: 0.9em !important;
        line-height: 1.4 !important;
        letter-spacing: 0.5px !important;
    }
}
}

.console_line,
.console_line.selector,
body .console_line,
body .console_line.selector {
    background: rgba(255,255,255,0.03) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 0.5em !important;
    padding: 0.5em 1em !important;
    margin: 0.2em 0 !important;
    transition: all 0.3s ease !important;
}

.console_line:hover,
.console_line.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.15)) !important;
    border-color: rgba(var(--primary-rgb), 0.4) !important;
}

.console_tab,
.console_tab.selector,
body .console_tab,
body .console_tab.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.8em !important;
    padding: 0.7em 1.5em !important;
    margin: 0.4em !important;
    transition: all 0.3s ease !important;
}

.console_tab:hover,
.console_tab.focus,
.console_tab.selector.active {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.3)) !important;
    border-color: rgba(var(--primary-rgb), 0.6) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions,
body .extensions {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15), rgba(0,0,0,0.93)) !important;
    backdrop-filter: blur(40px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.38) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6) !important;
}

.extensions__block-add,
.extensions__block-add.selector,
body .extensions__block-add,
body .extensions__block-add.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 1.2em !important;
    padding: 1.2em !important;
    margin: 0.8em 0 !important;
    transition: all 0.3s ease !important;
}

.extensions__block-add:hover,
.extensions__block-add.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions__item,
body .extensions__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.extensions__item:hover,
.extensions__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

.selector__item,
body .selector__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em 1.5em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.selector__item:hover,
.selector__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

/* === 袩袨袥携 袙袙袨袛袗 袧袗小孝袪袨袝袣 === */

.settings-input__content,
body .settings-input__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(var(--primary-rgb), 0.25) !important;
    border-radius: 0.8em !important;
    padding: 1.5em !important;
    transition: all 0.3s ease !important;
}

.settings-input__content:focus,
.settings-input__content.focus {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.95)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
}

${commonStyles}

`,

yinyang: `

/* 楔褉懈褎褌褘 蟹邪谐褉褍卸邪褞褌褋褟 谐谢芯斜邪谢褜薪芯 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈 */

:root {

--theme-primary: #1a1a1a;

--theme-secondary: #d9d9d9;

--theme-accent: #7a7a7a;

--text-contrast: #ffffff;

--text-main: #e6e6e6;

--font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

--primary-rgb: 122, 122, 122;

--bg-rgb: 14, 14, 14;

--glass-bg: 30, 30, 30;

--glass-border: 122, 122, 122;

}

/* 袠小袣袥挟效袗袝袦 袩袥袝袝袪 袠袟 袚袥袨袘袗袥鞋袧蝎啸 楔袪袠肖孝袨袙 - 袙袨袟袙袪袗些袗袝袦 袛袝肖袨袥孝袧蝎袡 楔袪袠肖孝 LAMPA */

.card__title, .card__title * { color: #E6E6E6 !important; text-shadow: 0 2px 5px rgba(0,0,0,0.9) !important; font-weight: 600; }

.full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #E6E6E6 !important; text-shadow: 0 1px 3px rgba(0,0,0,0.7) !important; }

.card__description, .card__description *, .info__line, .info__line * { color: #C4C4C4 !important; text-shadow: none !important; }

html, body, .extensions {

background: radial-gradient(circle at 30% 50%, #000 0%, #161616 30%, #d9d9d9 31%, #d9d9d9 32%, #161616 33%, #000 100%) !important;

background-size: 400% 400% !important;

animation: gradientShift 30s ease infinite !important;

}

body .head__action, .head__action {

background: rgba(122,122,122,0.25) !important;

backdrop-filter: blur(20px) saturate(180%) !important;

border: 1.5px solid rgba(217,217,217,0.3) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .head__action.focus, body .head__action:hover {

background: linear-gradient(45deg, #1a1a1a, #d9d9d9, #1a1a1a) !important;

box-shadow: 0 0 12px rgba(122,122,122,0.6) !important;

transform: scale(var(--hover-scale, 1.08)) translateZ(0) !important;

}

body .navigation-bar__body, .navigation-bar__body {

background: rgba(14,14,14,${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-bottom: 2px solid #7a7a7a !important;

}


transform: translateX(5px) translateZ(0) !important;

font-weight: 600;

}

.card__quality, .card__type::after {

background: linear-gradient(135deg, #1a1a1a, #d9d9d9) !important;

font-weight: 700;

color: #1a1a1a !important;

}

::-webkit-scrollbar-track { background: rgba(122,122,122,0.12) !important; }

::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #1a1a1a, #7a7a7a, #d9d9d9) !important; }


/* === LOADER - 袙小袝 孝袠袩蝎 === */

.activity__loader,
.loader,
.loader__icon,
.broadcast__loader,
.player__loader,
.selector__loader,
.torrent-item__loader,
.files__loader,
.online__loader,
.full-start__loader,
.modal-loading,
body .activity__loader,
body .loader,
body .loader__icon,
body .broadcast__loader,
body .player__loader,
body .selector__loader,
body .torrent-item__loader,
body .files__loader,
body .online__loader,
body .modal-loading {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E") no-repeat 50% 50% !important;
    background-size: contain !important;
}

/* 小锌械褑懈邪谢褜薪褘泄 褋褌懈谢褜 写谢褟 .modal-loading */
.modal-loading,
body .modal-loading {
    height: 6em !important;
}

/* 小泻褉褘胁邪械屑 胁薪褍褌褉械薪薪芯褋褌懈 loader */
.loader::before,
.loader::after,
.loader svg,
.loader > *,
.loader__icon::before,
.loader__icon::after,
.loader__icon svg,
.loader__icon > * {
    display: none !important;
}

/* === 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 === */

.modal,
.modal__content,
body .modal,
body .modal__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(50px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15) !important;
}

.modal__head,
body .modal__head {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.25), rgba(var(--primary-rgb), 0.15)) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(var(--primary-rgb), 0.3) !important;
    padding: 1.5em 2em !important;
    border-radius: 2em 2em 0 0 !important;
}

.modal__body,
body .modal__body {
    background: transparent !important;
    padding: 2em !important;
}

.about,
body .about {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.92)) !important;
    backdrop-filter: blur(45px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(45px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12) !important;
    padding: 2em !important;
}

.console,
body .console {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.96)) !important;
    backdrop-filter: blur(35px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(35px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.35) !important;
    border-radius: 2em !important;
    font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
    font-weight: 400 !important;
}

/* 小锌械褑懈邪谢褜薪褘械 锌褉邪胁懈谢邪 写谢褟 泻芯薪褋芯谢懈 薪邪 屑芯斜懈谢褜薪褘褏 褍褋褌褉芯泄褋褌胁邪褏 */
@media (max-width: 768px) {
    .console,
    body .console,
    .console *,
    .console_line,
    .console_line * {
        font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
        font-size: 0.9em !important;
        line-height: 1.4 !important;
        letter-spacing: 0.5px !important;
    }
}
}

.console_line,
.console_line.selector,
body .console_line,
body .console_line.selector {
    background: rgba(255,255,255,0.03) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 0.5em !important;
    padding: 0.5em 1em !important;
    margin: 0.2em 0 !important;
    transition: all 0.3s ease !important;
}

.console_line:hover,
.console_line.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.15)) !important;
    border-color: rgba(var(--primary-rgb), 0.4) !important;
}

.console_tab,
.console_tab.selector,
body .console_tab,
body .console_tab.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.8em !important;
    padding: 0.7em 1.5em !important;
    margin: 0.4em !important;
    transition: all 0.3s ease !important;
}

.console_tab:hover,
.console_tab.focus,
.console_tab.selector.active {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.3)) !important;
    border-color: rgba(var(--primary-rgb), 0.6) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions,
body .extensions {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15), rgba(0,0,0,0.93)) !important;
    backdrop-filter: blur(40px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.38) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6) !important;
}

.extensions__block-add,
.extensions__block-add.selector,
body .extensions__block-add,
body .extensions__block-add.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 1.2em !important;
    padding: 1.2em !important;
    margin: 0.8em 0 !important;
    transition: all 0.3s ease !important;
}

.extensions__block-add:hover,
.extensions__block-add.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions__item,
body .extensions__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.extensions__item:hover,
.extensions__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

.selector__item,
body .selector__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em 1.5em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.selector__item:hover,
.selector__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

/* === 袩袨袥携 袙袙袨袛袗 袧袗小孝袪袨袝袣 === */

.settings-input__content,
body .settings-input__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(var(--primary-rgb), 0.25) !important;
    border-radius: 0.8em !important;
    padding: 1.5em !important;
    transition: all 0.3s ease !important;
}

.settings-input__content:focus,
.settings-input__content.focus {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.95)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
}

${commonStyles}

`,

sunset: `

/* 楔褉懈褎褌褘 蟹邪谐褉褍卸邪褞褌褋褟 谐谢芯斜邪谢褜薪芯 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈 */

:root {

--theme-primary: #c8493f;

--theme-secondary: #d4711e;

--theme-accent: #e68f10;

--text-contrast: #ffffff;

--text-main: #f5d0a8;

--font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

--primary-rgb: 200, 73, 63;

--bg-rgb: 20, 8, 4;

--glass-bg: 32, 16, 8;

--glass-border: 200, 73, 63;

}

/* 袠小袣袥挟效袗袝袦 袩袥袝袝袪 袠袟 袚袥袨袘袗袥鞋袧蝎啸 楔袪袠肖孝袨袙 - 袙袨袟袙袪袗些袗袝袦 袛袝肖袨袥孝袧蝎袡 楔袪袠肖孝 LAMPA */

.card__title, .card__title * { color: #E68F10 !important; text-shadow: 0 0 10px rgba(230,143,16,0.7), 0 1px 3px rgba(0,0,0,0.7) !important; font-weight: 600; }

.full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #F5D088 !important; text-shadow: none !important; }

.card__description, .card__description *, .info__line, .info__line * { color: #F5D0A8 !important; text-shadow: none !important; }

html, body, .extensions {

background: linear-gradient(135deg, #140804 0%, #301610 25%, #c8493f 50%, #301610 75%, #140804 100%) !important;

background-size: 400% 400% !important;

animation: gradientShift 22s ease infinite !important;

}

body .head__action, .head__action {

background: rgba(200,73,63,0.25) !important;

backdrop-filter: blur(20px) saturate(180%) !important;

border: 1.5px solid rgba(200,73,63,0.45) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .head__action.focus, body .head__action:hover {

background: linear-gradient(45deg, #c8493f, #d4711e) !important;

box-shadow: 0 0 12px rgba(200,73,63,0.6) !important;

transform: scale(var(--hover-scale, 1.08)) translateZ(0) !important;

}

body .navigation-bar__body, .navigation-bar__body {

background: rgba(20,8,4,${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-bottom: 2px solid #c8493f !important;

}


border: 2px solid #e68f10 !important;

transform: translateX(5px) translateZ(0) !important;

font-weight: 600;

}

.card__quality, .card__type::after {

background: linear-gradient(135deg, #c8493f, #d4711e) !important;

font-weight: 700;

color: #FFF !important;

text-shadow: none !important;

}

::-webkit-scrollbar-track { background: rgba(200,73,63,0.12) !important; }

::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #c8493f, #d4711e, #e68f10) !important; }


/* === LOADER - 袙小袝 孝袠袩蝎 === */

.activity__loader,
.loader,
.loader__icon,
.broadcast__loader,
.player__loader,
.selector__loader,
.torrent-item__loader,
.files__loader,
.online__loader,
.full-start__loader,
.modal-loading,
body .activity__loader,
body .loader,
body .loader__icon,
body .broadcast__loader,
body .player__loader,
body .selector__loader,
body .torrent-item__loader,
body .files__loader,
body .online__loader,
body .modal-loading {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E") no-repeat 50% 50% !important;
    background-size: contain !important;
}

/* 小锌械褑懈邪谢褜薪褘泄 褋褌懈谢褜 写谢褟 .modal-loading */
.modal-loading,
body .modal-loading {
    height: 6em !important;
}

/* 小泻褉褘胁邪械屑 胁薪褍褌褉械薪薪芯褋褌懈 loader */
.loader::before,
.loader::after,
.loader svg,
.loader > *,
.loader__icon::before,
.loader__icon::after,
.loader__icon svg,
.loader__icon > * {
    display: none !important;
}

/* === 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 === */

.modal,
.modal__content,
body .modal,
body .modal__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(50px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15) !important;
}

.modal__head,
body .modal__head {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.25), rgba(var(--primary-rgb), 0.15)) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(var(--primary-rgb), 0.3) !important;
    padding: 1.5em 2em !important;
    border-radius: 2em 2em 0 0 !important;
}

.modal__body,
body .modal__body {
    background: transparent !important;
    padding: 2em !important;
}

.about,
body .about {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.92)) !important;
    backdrop-filter: blur(45px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(45px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12) !important;
    padding: 2em !important;
}

.console,
body .console {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.96)) !important;
    backdrop-filter: blur(35px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(35px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.35) !important;
    border-radius: 2em !important;
    font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
    font-weight: 400 !important;
}

/* 小锌械褑懈邪谢褜薪褘械 锌褉邪胁懈谢邪 写谢褟 泻芯薪褋芯谢懈 薪邪 屑芯斜懈谢褜薪褘褏 褍褋褌褉芯泄褋褌胁邪褏 */
@media (max-width: 768px) {
    .console,
    body .console,
    .console *,
    .console_line,
    .console_line * {
        font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
        font-size: 0.9em !important;
        line-height: 1.4 !important;
        letter-spacing: 0.5px !important;
    }
}
}

.console_line,
.console_line.selector,
body .console_line,
body .console_line.selector {
    background: rgba(255,255,255,0.03) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 0.5em !important;
    padding: 0.5em 1em !important;
    margin: 0.2em 0 !important;
    transition: all 0.3s ease !important;
}

.console_line:hover,
.console_line.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.15)) !important;
    border-color: rgba(var(--primary-rgb), 0.4) !important;
}

.console_tab,
.console_tab.selector,
body .console_tab,
body .console_tab.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.8em !important;
    padding: 0.7em 1.5em !important;
    margin: 0.4em !important;
    transition: all 0.3s ease !important;
}

.console_tab:hover,
.console_tab.focus,
.console_tab.selector.active {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.3)) !important;
    border-color: rgba(var(--primary-rgb), 0.6) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions,
body .extensions {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15), rgba(0,0,0,0.93)) !important;
    backdrop-filter: blur(40px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.38) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6) !important;
}

.extensions__block-add,
.extensions__block-add.selector,
body .extensions__block-add,
body .extensions__block-add.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 1.2em !important;
    padding: 1.2em !important;
    margin: 0.8em 0 !important;
    transition: all 0.3s ease !important;
}

.extensions__block-add:hover,
.extensions__block-add.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions__item,
body .extensions__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.extensions__item:hover,
.extensions__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

.selector__item,
body .selector__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em 1.5em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.selector__item:hover,
.selector__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

/* === 袩袨袥携 袙袙袨袛袗 袧袗小孝袪袨袝袣 === */

.settings-input__content,
body .settings-input__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(var(--primary-rgb), 0.25) !important;
    border-radius: 0.8em !important;
    padding: 1.5em !important;
    transition: all 0.3s ease !important;
}

.settings-input__content:focus,
.settings-input__content.focus {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.95)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
}

${commonStyles}

`,

ocean: `

/* 楔褉懈褎褌褘 蟹邪谐褉褍卸邪褞褌褋褟 谐谢芯斜邪谢褜薪芯 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈 */

:root {

--theme-primary: #004d6a;

--theme-secondary: #00699a;

--theme-accent: #18b0d8;

--text-contrast: #ffffff;

--text-main: #a8d8e8;

--font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

--primary-rgb: 6, 105, 154;

--bg-rgb: 4, 16, 24;

--glass-bg: 8, 29, 42;

--glass-border: 6, 105, 154;

}

/* 袠小袣袥挟效袗袝袦 袩袥袝袝袪 袠袟 袚袥袨袘袗袥鞋袧蝎啸 楔袪袠肖孝袨袙 - 袙袨袟袙袪袗些袗袝袦 袛袝肖袨袥孝袧蝎袡 楔袪袠肖孝 LAMPA */

.card__title, .card__title * { color: #40CAE8 !important; text-shadow: 0 0 10px rgba(64,202,232,0.6), 0 1px 3px rgba(0,0,0,0.6) !important; font-weight: 600; }

.full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #94DCF0 !important; text-shadow: none !important; }

.card__description, .card__description *, .info__line, .info__line * { color: #A8D8E8 !important; text-shadow: none !important; }

html, body, .extensions {

background: linear-gradient(135deg, #041018 0%, #092639 25%, #004d6a 50%, #092639 75%, #041018 100%) !important;

background-size: 400% 400% !important;

animation: gradientShift 20s ease infinite !important;

}

body .head__action, .head__action {

background: rgba(6,105,154,0.25) !important;

backdrop-filter: blur(20px) saturate(180%) !important;

border: 1.5px solid rgba(6,105,154,0.45) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .head__action.focus, body .head__action:hover {

background: linear-gradient(45deg, #004d6a, #00699a) !important;

box-shadow: 0 0 12px rgba(6,105,154,0.6) !important;

transform: scale(var(--hover-scale, 1.08)) translateZ(0) !important;

}

body .navigation-bar__body, .navigation-bar__body {

background: rgba(4,16,24,${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-bottom: 2px solid #00699a !important;

}


transform: translateX(5px) translateZ(0) !important;

font-weight: 600;

}

.card__quality, .card__type::after {

background: linear-gradient(135deg, #004d6a, #00699a) !important;

font-weight: 700;

color: #FFF !important;

text-shadow: none !important;

}

::-webkit-scrollbar-track { background: rgba(6,105,154,0.12) !important; }

::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #004d6a, #00699a, #18b0d8) !important; }


/* === LOADER - 袙小袝 孝袠袩蝎 === */

.activity__loader,
.loader,
.loader__icon,
.broadcast__loader,
.player__loader,
.selector__loader,
.torrent-item__loader,
.files__loader,
.online__loader,
.full-start__loader,
.modal-loading,
body .activity__loader,
body .loader,
body .loader__icon,
body .broadcast__loader,
body .player__loader,
body .selector__loader,
body .torrent-item__loader,
body .files__loader,
body .online__loader,
body .modal-loading {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E") no-repeat 50% 50% !important;
    background-size: contain !important;
}

/* 小锌械褑懈邪谢褜薪褘泄 褋褌懈谢褜 写谢褟 .modal-loading */
.modal-loading,
body .modal-loading {
    height: 6em !important;
}

/* 小泻褉褘胁邪械屑 胁薪褍褌褉械薪薪芯褋褌懈 loader */
.loader::before,
.loader::after,
.loader svg,
.loader > *,
.loader__icon::before,
.loader__icon::after,
.loader__icon svg,
.loader__icon > * {
    display: none !important;
}

/* === 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 === */

.modal,
.modal__content,
body .modal,
body .modal__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(50px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15) !important;
}

.modal__head,
body .modal__head {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.25), rgba(var(--primary-rgb), 0.15)) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(var(--primary-rgb), 0.3) !important;
    padding: 1.5em 2em !important;
    border-radius: 2em 2em 0 0 !important;
}

.modal__body,
body .modal__body {
    background: transparent !important;
    padding: 2em !important;
}

.about,
body .about {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.92)) !important;
    backdrop-filter: blur(45px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(45px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12) !important;
    padding: 2em !important;
}

.console,
body .console {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.96)) !important;
    backdrop-filter: blur(35px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(35px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.35) !important;
    border-radius: 2em !important;
    font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
    font-weight: 400 !important;
}

/* 小锌械褑懈邪谢褜薪褘械 锌褉邪胁懈谢邪 写谢褟 泻芯薪褋芯谢懈 薪邪 屑芯斜懈谢褜薪褘褏 褍褋褌褉芯泄褋褌胁邪褏 */
@media (max-width: 768px) {
    .console,
    body .console,
    .console *,
    .console_line,
    .console_line * {
        font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
        font-size: 0.9em !important;
        line-height: 1.4 !important;
        letter-spacing: 0.5px !important;
    }
}
}

.console_line,
.console_line.selector,
body .console_line,
body .console_line.selector {
    background: rgba(255,255,255,0.03) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 0.5em !important;
    padding: 0.5em 1em !important;
    margin: 0.2em 0 !important;
    transition: all 0.3s ease !important;
}

.console_line:hover,
.console_line.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.15)) !important;
    border-color: rgba(var(--primary-rgb), 0.4) !important;
}

.console_tab,
.console_tab.selector,
body .console_tab,
body .console_tab.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.8em !important;
    padding: 0.7em 1.5em !important;
    margin: 0.4em !important;
    transition: all 0.3s ease !important;
}

.console_tab:hover,
.console_tab.focus,
.console_tab.selector.active {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.3)) !important;
    border-color: rgba(var(--primary-rgb), 0.6) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions,
body .extensions {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15), rgba(0,0,0,0.93)) !important;
    backdrop-filter: blur(40px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.38) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6) !important;
}

.extensions__block-add,
.extensions__block-add.selector,
body .extensions__block-add,
body .extensions__block-add.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 1.2em !important;
    padding: 1.2em !important;
    margin: 0.8em 0 !important;
    transition: all 0.3s ease !important;
}

.extensions__block-add:hover,
.extensions__block-add.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions__item,
body .extensions__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.extensions__item:hover,
.extensions__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

.selector__item,
body .selector__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em 1.5em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.selector__item:hover,
.selector__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

/* === 袩袨袥携 袙袙袨袛袗 袧袗小孝袪袨袝袣 === */

.settings-input__content,
body .settings-input__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(var(--primary-rgb), 0.25) !important;
    border-radius: 0.8em !important;
    padding: 1.5em !important;
    transition: all 0.3s ease !important;
}

.settings-input__content:focus,
.settings-input__content.focus {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.95)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
}

${commonStyles}

`,

forest: `

/* 楔褉懈褎褌褘 蟹邪谐褉褍卸邪褞褌褋褟 谐谢芯斜邪谢褜薪芯 写谢褟 芯锌褌懈屑懈蟹邪褑懈懈 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌懈 */

:root {

--theme-primary: #284612;

--theme-secondary: #446d0c;

--theme-accent: #68a00a;

--text-contrast: #ffffff;

--text-main: #d0e698;

--font-family: 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;

--primary-rgb: 68, 109, 12;

--bg-rgb: 8, 16, 4;

--glass-bg: 16, 29, 8;

--glass-border: 68, 109, 12;

}

/* 袠小袣袥挟效袗袝袦 袩袥袝袝袪 袠袟 袚袥袨袘袗袥鞋袧蝎啸 楔袪袠肖孝袨袙 - 袙袨袟袙袪袗些袗袝袦 袛袝肖袨袥孝袧蝎袡 楔袪袠肖孝 LAMPA */

.card__title, .card__title * { color: #9DCE54 !important; text-shadow: 0 0 10px rgba(157,206,84,0.6), 0 1px 3px rgba(0,0,0,0.7) !important; font-weight: 600; }

.full-start__title, .full-start__title *, .menu__item-title, .menu__item-title *, .settings__title, .settings__title * { color: #C2DC80 !important; text-shadow: none !important; }

.card__description, .card__description *, .info__line, .info__line * { color: #D0E698 !important; text-shadow: none !important; }

html, body, .extensions {

background: linear-gradient(135deg, #081004 0%, #142206 25%, #284612 50%, #142206 75%, #081004 100%) !important;

background-size: 400% 400% !important;

animation: gradientShift 25s ease infinite !important;

}

body .head__action, .head__action {

background: rgba(68,109,12,0.25) !important;

backdrop-filter: blur(20px) saturate(180%) !important;

border: 1.5px solid rgba(68,109,12,0.45) !important;

border-radius: 2em !important;

transition: transform 0.15s ease, opacity 0.15s ease !important;

}

body .head__action.focus, body .head__action:hover {

background: linear-gradient(45deg, #284612, #446d0c) !important;

box-shadow: 0 0 12px rgba(68,109,12,0.6) !important;

transform: scale(var(--hover-scale, 1.08)) translateZ(0) !important;

}

body .navigation-bar__body, .navigation-bar__body {

background: rgba(8,16,4,${alpha}) !important;

backdrop-filter: blur(30px) saturate(180%) !important;

-webkit-backdrop-filter: blur(30px) saturate(180%) !important;

border-bottom: 2px solid #446d0c !important;

}


transform: translateX(5px) translateZ(0) !important;

font-weight: 600;

}

.card__quality, .card__type::after {

background: linear-gradient(135deg, #284612, #446d0c) !important;

font-weight: 700;

color: #FFF !important;

text-shadow: none !important;

}

::-webkit-scrollbar-track { background: rgba(68,109,12,0.12) !important; }

::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #284612, #446d0c, #68a00a) !important; }


/* === LOADER - 袙小袝 孝袠袩蝎 === */

.activity__loader,
.loader,
.loader__icon,
.broadcast__loader,
.player__loader,
.selector__loader,
.torrent-item__loader,
.files__loader,
.online__loader,
.full-start__loader,
.modal-loading,
body .activity__loader,
body .loader,
body .loader__icon,
body .broadcast__loader,
body .player__loader,
body .selector__loader,
body .torrent-item__loader,
body .files__loader,
body .online__loader,
body .modal-loading {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100'%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.4s' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect y='25' width='10' height='50' rx='4' ry='4' fill='%23fff'%3E%3Canimate attributeName='x' values='10;100' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3CanimateTransform attributeName='transform' type='rotate' from='0 10 70' to='-60 100 70' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3Canimate attributeName='opacity' values='0;1;0' dur='1.2s' begin='0.8s' repeatCount='indefinite'/%3E%3C/rect%3E%3C/svg%3E") no-repeat 50% 50% !important;
    background-size: contain !important;
}

/* 小锌械褑懈邪谢褜薪褘泄 褋褌懈谢褜 写谢褟 .modal-loading */
.modal-loading,
body .modal-loading {
    height: 6em !important;
}

/* 小泻褉褘胁邪械屑 胁薪褍褌褉械薪薪芯褋褌懈 loader */
.loader::before,
.loader::after,
.loader svg,
.loader > *,
.loader__icon::before,
.loader__icon::after,
.loader__icon svg,
.loader__icon > * {
    display: none !important;
}

/* === 袦袨袛袗袥鞋袧蝎袝 袨袣袧袗 === */

.modal,
.modal__content,
body .modal,
body .modal__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(50px) saturate(200%) !important;
    -webkit-backdrop-filter: blur(50px) saturate(200%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.15) !important;
}

.modal__head,
body .modal__head {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.25), rgba(var(--primary-rgb), 0.15)) !important;
    backdrop-filter: blur(20px) !important;
    border-bottom: 1px solid rgba(var(--primary-rgb), 0.3) !important;
    padding: 1.5em 2em !important;
    border-radius: 2em 2em 0 0 !important;
}

.modal__body,
body .modal__body {
    background: transparent !important;
    padding: 2em !important;
}

.about,
body .about {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.92)) !important;
    backdrop-filter: blur(45px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(45px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.4) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12) !important;
    padding: 2em !important;
}

.console,
body .console {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.96)) !important;
    backdrop-filter: blur(35px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(35px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.35) !important;
    border-radius: 2em !important;
    font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
    font-weight: 400 !important;
}

/* 小锌械褑懈邪谢褜薪褘械 锌褉邪胁懈谢邪 写谢褟 泻芯薪褋芯谢懈 薪邪 屑芯斜懈谢褜薪褘褏 褍褋褌褉芯泄褋褌胁邪褏 */
@media (max-width: 768px) {
    .console,
    body .console,
    .console *,
    .console_line,
    .console_line * {
        font-family: 'Consolas', 'Monaco', 'Courier New', 'Lucida Console', monospace !important;
        font-size: 0.9em !important;
        line-height: 1.4 !important;
        letter-spacing: 0.5px !important;
    }
}
}

.console_line,
.console_line.selector,
body .console_line,
body .console_line.selector {
    background: rgba(255,255,255,0.03) !important;
    backdrop-filter: blur(8px) !important;
    border: 1px solid rgba(255,255,255,0.06) !important;
    border-radius: 0.5em !important;
    padding: 0.5em 1em !important;
    margin: 0.2em 0 !important;
    transition: all 0.3s ease !important;
}

.console_line:hover,
.console_line.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1), rgba(var(--primary-rgb), 0.15)) !important;
    border-color: rgba(var(--primary-rgb), 0.4) !important;
}

.console_tab,
.console_tab.selector,
body .console_tab,
body .console_tab.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 0.8em !important;
    padding: 0.7em 1.5em !important;
    margin: 0.4em !important;
    transition: all 0.3s ease !important;
}

.console_tab:hover,
.console_tab.focus,
.console_tab.selector.active {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.2), rgba(var(--primary-rgb), 0.3)) !important;
    border-color: rgba(var(--primary-rgb), 0.6) !important;
    transform: scale(var(--hover-scale, 1.05)) !important;
    box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions,
body .extensions {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.15), rgba(0,0,0,0.93)) !important;
    backdrop-filter: blur(40px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(40px) saturate(180%) !important;
    border: 2px solid rgba(var(--primary-rgb), 0.38) !important;
    border-radius: 2em !important;
    box-shadow: 0 15px 50px rgba(0,0,0,0.6) !important;
}

.extensions__block-add,
.extensions__block-add.selector,
body .extensions__block-add,
body .extensions__block-add.selector {
    background: rgba(255,255,255,0.06) !important;
    backdrop-filter: blur(15px) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-radius: 1.2em !important;
    padding: 1.2em !important;
    margin: 0.8em 0 !important;
    transition: all 0.3s ease !important;
}

.extensions__block-add:hover,
.extensions__block-add.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.18), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.3) !important;
}

.extensions__item,
body .extensions__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.extensions__item:hover,
.extensions__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

.selector__item,
body .selector__item {
    background: rgba(255,255,255,0.04) !important;
    backdrop-filter: blur(12px) !important;
    border: 1px solid rgba(255,255,255,0.08) !important;
    border-radius: 1em !important;
    padding: 1em 1.5em !important;
    margin: 0.5em 0 !important;
    transition: all 0.3s ease !important;
}

.selector__item:hover,
.selector__item.focus {
    background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.15), rgba(var(--primary-rgb), 0.25)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    transform: translateX(8px) scale(var(--hover-scale, 1.02)) !important;
    box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.4) !important;
}

/* === 袩袨袥携 袙袙袨袛袗 袧袗小孝袪袨袝袣 === */

.settings-input__content,
body .settings-input__content {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.08), rgba(0,0,0,0.95)) !important;
    backdrop-filter: blur(20px) !important;
    -webkit-backdrop-filter: blur(20px) !important;
    border: 1px solid rgba(var(--primary-rgb), 0.25) !important;
    border-radius: 0.8em !important;
    padding: 1.5em !important;
    transition: all 0.3s ease !important;
}

.settings-input__content:focus,
.settings-input__content.focus {
    background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.12), rgba(0,0,0,0.95)) !important;
    border-color: rgba(var(--primary-rgb), 0.5) !important;
    box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3) !important;
}

${commonStyles}

`

};

var themeCSS = themes[theme] || '';

// 袨锌褌懈屑懈蟹邪褑懈褟 写谢褟 孝袙-褍褋褌褉芯泄褋褌胁 - 蟹邪屑械薪褟械屑 backdrop-filter 薪邪 锌褉芯褋褌褘械 褌械薪懈
if (isTVDevice) {
    themeCSS = themeCSS.replace(/backdrop-filter:\s*blur\([^)]+\)[^;]*;?/gi, '');
    themeCSS = themeCSS.replace(/-webkit-backdrop-filter:\s*blur\([^)]+\)[^;]*;?/gi, '');
    themeCSS = themeCSS.replace(/backdrop-filter:\s*blur\([^)]+\)\s*saturate\([^)]+\)[^;]*;?/gi, '');
    themeCSS = themeCSS.replace(/-webkit-backdrop-filter:\s*blur\([^)]+\)\s*saturate\([^)]+\)[^;]*;?/gi, '');
    
    // 袛芯斜邪胁谢褟械屑 锌褉芯褋褌褘械 褌械薪懈 胁屑械褋褌芯 backdrop-filter
    themeCSS += `
    .card, .menu__item, .settings-param, .files__item, .torrent-item,
    .filter__item, .sort__item, .selectbox-item, .online__item, .online__item-line,
    .online-prestige__item, .online-prestige__line, .online__tabs-item, 
    .full-start__button, .head__action {
        box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
    }
    `;
}

style.html(themeCSS);

$('head').append(style);

// 袩褉懈屑械薪械薪懈械 褋褌懈谢械泄 泻 泻邪褉褌芯褔泻邪屑
setTimeout(function() {
    $('.card').each(function() {
        var $card = $(this);
        var $img = $card.find('.card__img');
        
        if ($img.length) {
            $img.css({
                'border': 'none !important',
                'border-radius': '1em !important',
                'transition': 'all 0.3s ease !important',
                'box-sizing': 'border-box !important'
            });
            
            $img.addClass('drxaos-styled');
        }
    });
    
    // 袠褋锌芯谢褜蟹褍械屑 械写懈薪褍褞 褋懈褋褌械屑褍 芯斜褉邪斜芯褌泻懈 褋芯斜褘褌懈泄
    cardEventManager.initCardEvents();
}, 100);

// 袛芯锌芯谢薪懈褌械谢褜薪芯械 锌褉懈屑械薪械薪懈械 褋褌懈谢械泄 褔械褉械蟹 1 褋械泻褍薪写褍
setTimeout(function() {
    $('.card').each(function() {
        var $card = $(this);
        var $img = $card.find('.card__img');
        
        if ($img.length && !$img.hasClass('drxaos-styled')) {
            $img.css({
                'border': 'none !important',
                'border-radius': '1em !important',
                'transition': 'all 0.3s ease !important',
                'box-sizing': 'border-box !important'
            });
            
            $img.addClass('drxaos-styled');
        }
    });
}, 1000);

// 校斜懈褉邪械屑 蟹邪写械褉卸泻懈 懈 谢芯谐懈 写谢褟 屑芯写邪谢褜薪褘褏 芯泻芯薪


        applyAnimations();
        
        applyFontWeight();
        applyGlow();
        
        // 袩袪袨小孝袨袡 小袩袨小袨袘 - 袩袪携袦蝎袝 袨袘袙袨袛袣袠 袧袗 .card__img
        var outlineCSS = `
            .card:hover .card__img,
            .card.focus .card__img {
                border: 5px solid var(--theme-primary, #5a3494) !important;
                border-radius: 1em !important;
                box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
                outline: none !important;
            }
            .card.focus .card__img {
                border-color: var(--theme-accent, #0088bb) !important;
                box-shadow: 0 0 30px var(--theme-accent, #0088bb) !important;
            }
        `;
        
        // 袛芯斜邪胁谢褟械屑 褋褌懈谢懈 胁 head
        if (!$('#drxaos-outline-styles').length) {
            $('head').append('<style id="drxaos-outline-styles">' + outlineCSS + '</style>');
        }
        
        // 袩褉懈薪褍写懈褌械谢褜薪芯 锌褉懈屑械薪褟械屑 褋褌懈谢懈 泻 褋褍褖械褋褌胁褍褞褖懈屑 泻邪褉褌芯褔泻邪屑
        setTimeout(function() {
            $('.card .card__img').each(function() {
                var $img = $(this);
                $img.css({
                    'border': '2px solid var(--theme-primary, #5a3494)',
                    'border-radius': '1em',
                    'box-shadow': '0 4px 12px rgba(0,0,0,0.3)',
                    'transition': 'all 0.3s ease'
                });
            });
        }, 1000);
        
        // 袩械褉械褋芯蟹写邪械屑 芯斜胁芯写泻懈 锌褉懈 懈蟹屑械薪械薪懈懈 褌械屑
        setTimeout(function() {
            createPosterOutlines();
        }, 2000);
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 锌褉懈屑械薪械薪懈褟 褌械屑褘', e);
    }

applyFullButtons();

}

function applyAnimations() {
    try {
        if (!window.jQuery || !window.$) return;
var animations = Lampa.Storage.get('drxaos_animations', true);

styleManager.removeStyle('drxaos_animations_style');

if (animations) {
    // 袨锌褉械写械谢褟械屑 褌懈锌 褍褋褌褉芯泄褋褌胁邪 褔械褉械蟹 械写懈薪褍褞 褋懈褋褌械屑褍
    var isTV = deviceDetection.isTV();
    
    // 袨锌褌懈屑懈蟹邪褑懈褟 邪薪懈屑邪褑懈泄 写谢褟 孝袙-褍褋褌褉芯泄褋褌胁
    var animationCSS = isTV ? 
        // 袨锌褌懈屑懈蟹懈褉芯胁邪薪薪褘械 邪薪懈屑邪褑懈懈 写谢褟 TV 2025
        '.card, .menu__item, .settings-param, .files__item, .torrent-item, .filter__item, .sort__item, .selectbox-item, .online__item, .online__item-line, .online-prestige__item, .online-prestige__line, .online__tabs-item, .full-start__button, .head__action { transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important; will-change: transform, opacity !important; contain: layout style paint !important; }' :
        // 袩芯谢薪褘械 邪薪懈屑邪褑懈懈 写谢褟 袩袣/屑芯斜懈谢褜薪褘褏
        '.card, .menu__item, .settings-param, .files__item, .torrent-item, .filter__item, .sort__item, .selectbox-item, .online__item, .online__item-line, .online-prestige__item, .online-prestige__line, .online__tabs-item, .full-start__button, .head__action { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important; will-change: auto !important; }';
    
    styleManager.setStyle('drxaos_animations_style', animationCSS);
    
    // 袩褉懈屑械薪械薪懈械 褋褌懈谢械泄 泻 泻邪褉褌芯褔泻邪屑 褋 芯锌褌懈屑懈蟹邪褑懈械泄 写谢褟 TV
    setTimeout(function() {
        $('.card').each(function() {
            var $card = $(this);
            var $img = $card.find('.card__img');
            
            if ($img.length) {
                var transitionType = isTV ? 'transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)' : 'all 0.3s ease';
                
                $img.css({
                    'border': 'none !important',
                    'border-radius': '1em !important',
                    'transition': transitionType + ' !important',
                    'box-sizing': 'border-box !important',
                    'will-change': isTV ? 'transform, border-color, box-shadow !important' : 'auto !important',
                    'contain': isTV ? 'layout style paint !important' : 'none !important'
                });
                
                $img.addClass('drxaos-styled');
            }
        });
    }, 50);
}
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 锌褉懈屑械薪械薪懈褟 邪薪懈屑邪褑懈泄', e);
    }
}

function applyFontWeight() {
    try {
        if (!window.jQuery || !window.$) return;
        
        var fontWeight = Lampa.Storage.get('drxaos_font_weight', '400');
        
        styleManager.removeStyle('drxaos_font_weight_style');
        
        // 效懈褋褌褘械 CSS-褋胁芯泄褋褌胁邪 写谢褟 褌芯谢褖懈薪褘 褕褉懈褎褌邪 斜械蟹 泻芯褋褌褘谢械泄
        var additionalCSS = `
            text-shadow: none !important;
            font-stretch: normal !important;
            letter-spacing: normal !important;
        `;
        
        var fontWeightCSS = `
            :root {
                --font-weight: ${fontWeight} !important;
            }
            
            *, body, .card, .menu__item, .settings-param, .files__item, .torrent-item,
            .filter__item, .sort__item, .selectbox-item, .online__item, .online__item-line,
            .online-prestige__item, .online-prestige__line, .online__tabs-item, 
            .full-start__button, .head__action, .card__title, .card__description,
            .menu__item-title, .settings__title, .full-start__title {
                font-weight: var(--font-weight, ${fontWeight}) !important;
                ${additionalCSS}
            }
        `;
        
        styleManager.setStyle('drxaos_font_weight_style', fontWeightCSS);
        
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 锌褉懈屑械薪械薪懈褟 褌芯谢褖懈薪褘 褕褉懈褎褌邪', e);
    }
}

function applyGlow() {
    try {
        if (!window.jQuery || !window.$) return;
        
        var glow = Lampa.Storage.get('drxaos_glow', 'medium');
        var glowValues = { 'off': '0', 'low': '0.15em', 'medium': '0.3em', 'high': '0.5em' };
        var glowSize = glowValues[glow] || '0.3em';
        
        styleManager.removeStyle('drxaos-glow-styles');
        
        var glowCSS = `
            body .card:hover .card__img, .card:hover .card__img {
                box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
            }
            body .card.focus .card__img, .card.focus .card__img {
                box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
            }
            .menu__item:hover {
                box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;
            }
            .button, .settings-param {
                box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;
            }
            .drxaos-theme-quick-btn:hover {
                box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494) !important;
            }
            .filter--search:hover, .filter--sort:hover, .filter--filter:hover,
            .simple-button--filter:hover, .selector--filter:hover,
            div.simple-button.simple-button--filter.filter--filter.selector:hover {
                box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;
            }
            .torrent-serial_content:hover, div.torrent-serial_content:hover {
                box-shadow: 0 0 ${glowSize} var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;
            }
        `;
        
        styleManager.setStyle('drxaos-glow-styles', glowCSS);
        
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 锌褉懈屑械薪械薪懈褟 褋胁械褔械薪懈褟', e);
    }
}

function applyFullButtons() {
    try {
        if (!window.jQuery || !window.$) return;
var fullbuttons = Lampa.Storage.get('drxaos_fullbuttons', false);

styleManager.removeStyle('drxaos_fullbuttons_style');

if (fullbuttons) {

styleManager.setStyle('drxaos_fullbuttons_style_on', '.full-start__button span { display: inline !important; }');

} else {

styleManager.setStyle('drxaos_fullbuttons_style', '.full-start__button span { display: none !important; }');

}
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 锌褉懈屑械薪械薪懈褟 锌芯谢薪褘褏 泻薪芯锌芯泻', e);
    }
}

function createQuickThemeModal() {
    try {
        if (!window.jQuery || !window.$) return;
        
        // 肖褍薪泻褑懈褟 蟹邪泻褉褘褌懈褟 屑芯写邪谢褜薪芯谐芯 芯泻薪邪
        function closeModal() {
            var modal = document.querySelector('.drxaos-quick-theme-modal');
            if (modal) {
                modal.remove();
                // 袨褔懈褖邪械屑 芯斜褉邪斜芯褌褔懈泻懈 褋芯斜褘褌懈泄
                $(document).off('keydown.quickThemeModal');
                $(document).off('keyup.quickThemeModal');
                $(document).off('keydown.quickThemeNavigation');
                
                // 小斜褉邪褋褘胁邪械屑 褋芯褋褌芯褟薪懈械 泻薪芯锌泻懈 褋 泻懈褋褌芯褔泻芯泄
                var quickBtn = document.querySelector('#drxaos-quick-theme-btn');
                if (quickBtn) {
                    quickBtn.classList.remove('focus', 'focused', 'active');
                    quickBtn.blur();
                }
            }
        }
        
var modal = $('<div class="drxaos-quick-theme-modal"></div>');

var overlay = $('<div class="drxaos-modal-overlay"></div>');

var content = $('<div class="drxaos-modal-content"></div>');

var title = $('<h2 class="drxaos-modal-title">馃帹 袙褘斜械褉懈褌械 褌械屑褍</h2>');

var themesGrid = $('<div class="drxaos-themes-grid"></div>');

// 袩械褉械屑械薪薪邪褟 写谢褟 锌褉械写芯褌胁褉邪褖械薪懈褟 屑薪芯卸械褋褌胁械薪薪褘褏 胁褘蟹芯胁芯胁
var themesList = [
{ id: 'cyberpunk', name: '馃敭 袣懈斜械褉锌邪薪泻', icon: '馃敭' },
{ id: 'matrix', name: '馃挌 袦邪褌褉懈褑邪', icon: '馃挌' },
{ id: 'retrowave', name: '馃寛 袪械褌褉芯胁芯谢薪邪', icon: '馃寛' },
{ id: 'iceblue', name: '鉂勶笍 袥械写褟薪邪褟', icon: '鉂勶笍' },
{ id: 'monochrome', name: '鈿?袦芯薪芯褏褉芯屑', icon: '鈿? },
{ id: 'yinyang', name: '鈽笍 袠薪褜-携薪褜', icon: '鈽笍' },
{ id: 'sunset', name: '馃寘 袟邪泻邪褌', icon: '馃寘' },
{ id: 'ocean', name: '馃寠 袨泻械邪薪', icon: '馃寠' },
{ id: 'forest', name: '馃尣 袥械褋', icon: '馃尣' },
{ id: 'default', name: '馃幆 小褌邪薪写邪褉褌', icon: '馃幆' }
];

var currentTheme = Lampa.Storage.get('drxaos_theme', 'default');

// 肖褍薪泻褑懈褟 蟹邪泻褉褘褌懈褟 屑芯写邪谢褜薪芯谐芯 芯泻薪邪
function closeModal() {
    // 校写邪谢褟械屑 胁褋械 芯斜褉邪斜芯褌褔懈泻懈 褋芯斜褘褌懈泄
    $(document).off('keydown.quickThemeModal');
    $(document).off('keydown.quickThemeNavigation');
    $(document).off('click.quickThemeModal');
    // 袧袝 褍写邪谢褟械屑 谐谢芯斜邪谢褜薪褘泄 芯斜褉邪斜芯褌褔懈泻 Esc - 芯薪 写芯谢卸械薪 褉邪斜芯褌邪褌褜 胁褋械谐写邪
    
    // 校斜懈褉邪械屑 褎芯泻褍褋 褋 屑芯写邪谢褜薪芯谐芯 芯泻薪邪
    if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
    }
    
    // 袧邪褏芯写懈屑 屑芯写邪谢褜薪芯械 芯泻薪芯 懈 蟹邪泻褉褘胁邪械屑 械谐芯
    var $modal = $('.drxaos-quick-theme-modal');
    if ($modal.length > 0) {
        $modal.stop().fadeOut(200, function() {
            $modal.remove();
            
            // 袙芯蟹胁褉邪褖邪械屑 褎芯泻褍褋 薪邪 泻薪芯锌泻褍 斜褘褋褌褉芯谐芯 胁褘斜芯褉邪 褌械屑 锌芯褋谢械 蟹邪泻褉褘褌懈褟
            setTimeout(function() {
                var $btn = $('#drxaos-quick-theme-btn');
                if ($btn.length) {
                    $btn.focus();
                } else {
                    // 袝褋谢懈 泻薪芯锌泻邪 薪械 薪邪泄写械薪邪, 褍斜懈褉邪械屑 褎芯泻褍褋 褋 谢褞斜芯谐芯 褝谢械屑械薪褌邪
                    if (document.activeElement && document.activeElement.blur) {
                        document.activeElement.blur();
                    }
                }
            }, 100);
        });
    }
}

// 肖褍薪泻褑懈褟 邪泻褌懈胁邪褑懈懈 褌械屑褘
function activateTheme(themeId) {
    // 小芯褏褉邪薪褟械屑 褌械泻褍褖褍褞 褌械屑褍 袛袨 锌芯锌褘褌泻懈 懈蟹屑械薪械薪懈褟 写谢褟 胁芯蟹屑芯卸薪芯褋褌懈 胁芯褋褋褌邪薪芯胁谢械薪懈褟
    var previousTheme = Lampa.Storage.get('drxaos_theme', 'default');
    
    try {
        // lampaLogger.log('袗泻褌懈胁邪褑懈褟 褌械屑褘', { theme: themeId });
        Lampa.Storage.set('drxaos_theme', themeId);
        applyTheme(themeId);
        applyAdvancedSettings();
        // lampaLogger.log('孝械屑邪 邪泻褌懈胁懈褉芯胁邪薪邪 褍褋锌械褕薪芯', { theme: themeId });
    } catch(e) {
        // 袨斜褉邪斜芯褌泻邪 芯褕懈斜芯泻 锌褉懈 褋屑械薪械 褌械屑褘
        console.error('袨褕懈斜泻邪 邪泻褌懈胁邪褑懈懈 褌械屑褘:', e);
        // 袙芯褋褋褌邪薪邪胁谢懈胁邪械屑 锌褉械写褘写褍褖褍褞 褌械屑褍
        if (previousTheme !== themeId) {
            Lampa.Storage.set('drxaos_theme', previousTheme);
            try {
                applyTheme(previousTheme);
                applyAdvancedSettings();
            } catch(restoreError) {
                console.error('袨褕懈斜泻邪 胁芯褋褋褌邪薪芯胁谢械薪懈褟 褌械屑褘:', restoreError);
            }
        }
    }
    
    // 袩袪袠袧校袛袠孝袝袥鞋袧袨袝 袨袘袧袨袙袥袝袧袠袝 小孝袠袥袝袡 袣袧袨袩袣袠 肖袠袥鞋孝袪袗 袩袪袠 小袦袝袧袝 孝袝袦蝎
    setTimeout(function() {
        var filterButtons = document.querySelectorAll('div.simple-button.simple-button--filter.filter--filter.selector');
        
        filterButtons.forEach(function(button) {
            if (button) {
                button.style.setProperty('background', 'var(--glass-bg, rgba(0,0,0,0.7))', 'important');
                button.style.setProperty('border', '2px solid var(--theme-primary, #5a3494)', 'important');
                button.style.setProperty('border-radius', '2em', 'important');
                button.style.setProperty('color', 'var(--text-main, #ffffff)', 'important');
                button.style.setProperty('box-shadow', '0 4px 12px rgba(0,0,0,0.3)', 'important');
            }
        });
    }, 200);
    
    
    // 袟邪泻褉褘胁邪械屑 屑芯写邪谢褜薪芯械 芯泻薪芯 褋 蟹邪写械褉卸泻芯泄 写谢褟 泻芯褉褉械泻褌薪芯谐芯 胁芯蟹胁褉邪褌邪 褎芯泻褍褋邪
    setTimeout(function() {
        closeModal();
        
        // 袛芯锌芯谢薪懈褌械谢褜薪邪褟 蟹邪褖懈褌邪 - 褍斜懈褉邪械屑 褎芯泻褍褋 锌芯褋谢械 胁褘斜芯褉邪 褌械屑褘
        setTimeout(function() {
            if (document.activeElement && document.activeElement.blur) {
                document.activeElement.blur();
            }
            
            // 袙芯蟹胁褉邪褖邪械屑 褎芯泻褍褋 薪邪 泻薪芯锌泻褍 斜褘褋褌褉芯谐芯 胁褘斜芯褉邪 褌械屑
            var $btn = $('#drxaos-quick-theme-btn');
            if ($btn.length) {
                $btn.focus();
            }
        }, 200);
    }, 100);
}

themesList.forEach(function(theme) {
    var themeBtn = $('<div class="drxaos-theme-item' + (currentTheme === theme.id ? ' active' : '') + '" data-theme="' + theme.id + '" tabindex="0" role="button" aria-label="袙褘斜褉邪褌褜 褌械屑褍 ' + theme.name + '"><span class="drxaos-theme-icon">' + theme.icon + '</span><span class="drxaos-theme-name">' + theme.name + '</span></div>');

    // 袨斜褉邪斜芯褌褔懈泻 泻谢懈泻邪
    themeBtn.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        try {
            var selectedTheme = $(this).data('theme');
            activateTheme(selectedTheme);
            
            // 小斜褉邪褋褘胁邪械屑 褋芯褋褌芯褟薪懈械 泻薪芯锌泻懈 褋 泻懈褋褌芯褔泻芯泄 锌芯褋谢械 胁褘斜芯褉邪 褌械屑褘
            var quickBtn = document.querySelector('#drxaos-quick-theme-btn');
            if (quickBtn) {
                quickBtn.classList.remove('focus', 'focused', 'active');
                quickBtn.blur();
            }
        } catch(error) {
            console.error('袨褕懈斜泻邪 锌褉懈 胁褘斜芯褉械 褌械屑褘:', error);
            // 袟邪泻褉褘胁邪械屑 屑芯写邪谢褜薪芯械 芯泻薪芯 写邪卸械 锌褉懈 芯褕懈斜泻械
            closeModal();
        }
    });

    // 袨斜褉邪斜芯褌褔懈泻 泻谢邪胁懈邪褌褍褉褘
    themeBtn.on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ' || e.keyCode === 13 || e.keyCode === 32) {
            e.preventDefault();
            e.stopPropagation();
            var selectedTheme = $(this).data('theme');
            activateTheme(selectedTheme);
            
            // 小斜褉邪褋褘胁邪械屑 褋芯褋褌芯褟薪懈械 泻薪芯锌泻懈 褋 泻懈褋褌芯褔泻芯泄 锌芯褋谢械 胁褘斜芯褉邪 褌械屑褘
            var quickBtn = document.querySelector('#drxaos-quick-theme-btn');
            if (quickBtn) {
                quickBtn.classList.remove('focus', 'focused', 'active');
                quickBtn.blur();
            }
        }
    });

    // 袨斜褉邪斜芯褌褔懈泻懈 褎芯泻褍褋邪
    themeBtn.on('focus', function() {
        $('.drxaos-theme-item').removeClass('active');
        $(this).addClass('active');
    });

    themeBtn.on('mouseenter', function() {
        $('.drxaos-theme-item').removeClass('active');
        $(this).addClass('active');
});

themesGrid.append(themeBtn);
});

content.append(title).append(themesGrid);
modal.append(overlay).append(content);

// 袛芯锌芯谢薪懈褌械谢褜薪邪褟 蟹邪褖懈褌邪 写谢褟 孝袙 - 芯斜褉邪斜芯褌褔懈泻 泻薪芯锌泻懈 袧邪蟹邪写 褔械褉械蟹 Lampa
if (typeof Lampa !== 'undefined' && Lampa.Listener) {
    // 袨斜褉邪斜芯褌褔懈泻 泻薪芯锌泻懈 "薪邪蟹邪写" 写谢褟 孝袙
    var backHandler = function() {
        var $modal = $('.drxaos-quick-theme-modal');
        if ($modal.length > 0 && $modal.is(':visible')) {
            closeModal();
            return false; // 袩褉械写芯褌胁褉邪褖邪械屑 褋褌邪薪写邪褉褌薪芯械 锌芯胁械写械薪懈械
        }
        return true; // 袩芯蟹胁芯谢褟械屑 褋褌邪薪写邪褉褌薪芯械 锌芯胁械写械薪懈械
    };
    
    // 袪械谐懈褋褌褉懈褉褍械屑 芯斜褉邪斜芯褌褔懈泻
    Lampa.Listener.follow('back', backHandler);
}

// 袚谢芯斜邪谢褜薪褘泄 芯斜褉邪斜芯褌褔懈泻 Esc 写谢褟 胁褘褏芯写邪 锌芯褋谢械 懈蟹屑械薪械薪懈褟 褌械屑褘
$(document).on('keydown.quickThemeGlobal', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
        // 袩褉芯胁械褉褟械屑, 械褋褌褜 谢懈 芯褌泻褉褘褌芯械 屑芯写邪谢褜薪芯械 芯泻薪芯
        var $modal = $('.drxaos-quick-theme-modal');
        if ($modal.length > 0 && $modal.is(':visible')) {
            // 袦芯写邪谢褜薪芯械 芯泻薪芯 芯褌泻褉褘褌芯 - 蟹邪泻褉褘胁邪械屑 械谐芯
            closeModal();
        } else {
            // 袦芯写邪谢褜薪芯械 芯泻薪芯 蟹邪泻褉褘褌芯 - 褍斜懈褉邪械屑 褎芯泻褍褋 懈 胁芯蟹胁褉邪褖邪械屑 薪邪 泻薪芯锌泻褍
            if (document.activeElement && document.activeElement.blur) {
                document.activeElement.blur();
            }
            
            // 袙芯蟹胁褉邪褖邪械屑 褎芯泻褍褋 薪邪 泻薪芯锌泻褍 斜褘褋褌褉芯谐芯 胁褘斜芯褉邪 褌械屑
            var $btn = $('#drxaos-quick-theme-btn');
            if ($btn.length) {
                $btn.focus();
            }
        }
    }
});

// 袨斜褉邪斜芯褌褔懈泻 泻谢懈泻邪 锌芯 overlay
overlay.on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
});

// 袝写懈薪褘泄 芯斜褉邪斜芯褌褔懈泻 写谢褟 胁褋械褏 泻薪芯锌芯泻 蟹邪泻褉褘褌懈褟 屑芯写邪谢褜薪芯谐芯 芯泻薪邪
$(document).on('keydown.quickThemeModal', function(e) {
    if (document.querySelector('.drxaos-quick-theme-modal')) {
        // 袙褋械 胁芯蟹屑芯卸薪褘械 泻芯写褘 泻薪芯锌泻懈 "袧邪蟹邪写" 懈 ESC
        if (e.key === 'Escape' || e.keyCode === 27 || 
            e.key === 'Backspace' || e.keyCode === 8 ||
            e.key === 'Back' || e.keyCode === 166 ||
            e.keyCode === 461 || e.keyCode === 462 || e.keyCode === 10009 ||
            e.keyCode === 4 || e.keyCode === 111 || e.keyCode === 115) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
            return false;
        }
    }
});

// 袛芯锌芯谢薪懈褌械谢褜薪褘泄 芯斜褉邪斜芯褌褔懈泻 写谢褟 Android TV 懈 Fire TV
$(document).on('keyup.quickThemeModal', function(e) {
    if (document.querySelector('.drxaos-quick-theme-modal')) {
        // 袛芯锌芯谢薪懈褌械谢褜薪褘械 泻芯写褘 写谢褟 Android TV
        if (e.keyCode === 4 || e.keyCode === 111 || e.keyCode === 115) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
            return false;
        }
    }
});

// 袩褉械写芯褌胁褉邪褖邪械屑 蟹邪泻褉褘褌懈械 锌褉懈 泻谢懈泻械 薪邪 褋芯写械褉卸懈屑芯械 屑芯写邪谢褜薪芯谐芯 芯泻薪邪
content.on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
});

// 校写邪谢械薪 写褍斜谢懈褉褍褞褖懈泄褋褟 芯斜褉邪斜芯褌褔懈泻 - 懈褋锌芯谢褜蟹褍械褌褋褟 械写懈薪褘泄 胁褘褕械

// 袨斜褉邪斜芯褌褔懈泻 写谢褟 薪邪胁懈谐邪褑懈懈 褋褌褉械谢泻邪屑懈 懈 泻薪芯锌泻懈 袧邪蟹邪写
$(document).on('keydown.quickThemeNavigation', function(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        
        var $items = $('.drxaos-theme-item');
        var $active = $items.filter('.active');
        var currentIndex = $items.index($active);
        var newIndex = currentIndex;
        
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : $items.length - 1;
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            newIndex = currentIndex < $items.length - 1 ? currentIndex + 1 : 0;
        }
        
        $active.removeClass('active');
        $items.eq(newIndex).addClass('active').focus();
    } else if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();
        var selectedTheme = $('.drxaos-theme-item.active').data('theme');
        if (selectedTheme) {
            activateTheme(selectedTheme);
            
            // 小斜褉邪褋褘胁邪械屑 褋芯褋褌芯褟薪懈械 泻薪芯锌泻懈 褋 泻懈褋褌芯褔泻芯泄 锌芯褋谢械 胁褘斜芯褉邪 褌械屑褘
            var quickBtn = document.querySelector('#drxaos-quick-theme-btn');
            if (quickBtn) {
                quickBtn.classList.remove('focus', 'focused', 'active');
                quickBtn.blur();
            }
        }
    } else if (e.key === 'Backspace' || e.keyCode === 8 ||
               e.key === 'Back' || e.keyCode === 166 ||
               e.keyCode === 461 || e.keyCode === 462 || e.keyCode === 10009) {
        e.preventDefault();
        e.stopPropagation();
        closeModal();
        return false;
    }
});

var styles = `

<style>

.drxaos-quick-theme-modal {

position: fixed;

top: 0;

left: 0;

width: 100%;

height: 100%;

z-index: 10000;

display: flex;

align-items: center;

justify-content: center;

font-family: var(--font-family, 'Segoe UI Emoji', 'Segoe UI Symbol', 'Segoe UI', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif);

font-weight: var(--font-weight, 400);

}

.drxaos-modal-overlay {

position: absolute;

top: 0;

left: 0;

width: 100%;

height: 100%;

background: rgba(0, 0, 0, 0.7);

backdrop-filter: blur(10px);

-webkit-backdrop-filter: blur(10px);

cursor: pointer;

z-index: 1;

}

.drxaos-modal-content {

position: relative;

z-index: 2;

background: rgba(30, 30, 40, 0.95);

backdrop-filter: blur(40px) saturate(180%);

-webkit-backdrop-filter: blur(40px) saturate(180%);

border: 2px solid rgba(107, 63, 174, 0.6);

border-radius: 1.5em;

padding: 2em;

max-width: 90%;

width: 700px;

box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

animation: modalSlideIn 0.3s ease-out;

cursor: default;

}

@keyframes modalSlideIn {

from {

opacity: 0;

transform: translateY(-30px) scale(0.95);

}

to {

opacity: 1;

transform: translateY(0) scale(1);

}

}

.drxaos-modal-title {

color: #00c8e6;

font-size: 1.8em;

font-weight: 700;

margin: 0 0 1em 0;

text-align: center;

text-shadow: 0 0 20px rgba(0, 200, 230, 0.6);

}

.drxaos-themes-grid {

display: grid;

grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

gap: 1em;

}

.drxaos-theme-item {

background: rgba(50, 50, 70, 0.5);

border: 2px solid rgba(107, 63, 174, 0.3);

border-radius: 1em;

padding: 1.5em 1em;

cursor: pointer;

transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

display: flex;

flex-direction: column;

align-items: center;

gap: 0.5em;

backdrop-filter: blur(10px);

-webkit-backdrop-filter: blur(10px);

}

.drxaos-theme-item:hover {

background: linear-gradient(135deg, rgba(107, 63, 174, 0.4), rgba(0, 153, 204, 0.4));

border-color: #00c8e6;

transform: translateY(-5px) scale(1.05);

box-shadow: 0 10px 30px rgba(0, 200, 230, 0.4);

}

.drxaos-theme-item.active {

background: linear-gradient(135deg, #6b3fae, #0099cc);

border-color: #00c8e6;

box-shadow: 0 0 20px rgba(0, 200, 230, 0.6);

}

.drxaos-theme-item:focus {

outline: none;

background: linear-gradient(135deg, rgba(107, 63, 174, 0.6), rgba(0, 153, 204, 0.6));

border-color: #00c8e6;

transform: translateY(-3px) scale(1.02);

box-shadow: 0 8px 25px rgba(0, 200, 230, 0.5);

}

.drxaos-theme-icon {

font-size: 2.5em;

line-height: 1;

filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

}

.drxaos-theme-name {

color: #fff;

font-size: 0.9em;

font-weight: 600;

text-align: center;

text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

}

.drxaos-theme-item.active .drxaos-theme-name {

color: #fff;

font-weight: 700;

text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

}

</style>

`;

$('head').append(styles);

$('body').append(modal);

modal.hide().fadeIn(300, function() {
    // 肖芯泻褍褋懈褉褍械屑褋褟 薪邪 邪泻褌懈胁薪芯泄 褌械屑械 懈谢懈 锌械褉胁芯泄 褌械屑械
    var $activeItem = $('.drxaos-theme-item.active');
    if ($activeItem.length > 0) {
        $activeItem.focus();
    } else {
        $('.drxaos-theme-item').first().focus().addClass('active');
    }
});
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 褋芯蟹写邪薪懈褟 屑芯写邪谢褜薪芯谐芯 芯泻薪邪 胁褘斜芯褉邪 褌械屑', e);
    }
}

function addQuickThemeButton() {
    try {
        if (!window.jQuery || !window.$) return;
        
var checkInterval = setInterval(function() {
if ($('.head__actions').length > 0 && $('#drxaos-quick-theme-btn').length === 0) {
                // 小芯蟹写邪械屑 泻薪芯锌泻褍 泻邪泻 薪邪褌懈胁薪褘泄 褝谢械屑械薪褌 Lampa (锌褉邪胁懈谢褜薪褘泄 褋锌芯褋芯斜)
                var btn = $('<div class="head__action drxaos-theme-quick-btn selector" id="drxaos-quick-theme-btn" title="袘褘褋褌褉褘泄 胁褘斜芯褉 褌械屑褘" data-action="drxaos-quick-theme"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.71 4.63l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z" fill="currentColor"/></svg></div>');

                // 袛芯斜邪胁谢褟械屑 泻薪芯锌泻褍 胁 DOM
$('.head__actions').prepend(btn);

                // 袩褉芯胁械褉褟械屑, 褔褌芯 泻薪芯锌泻邪 褋芯蟹写邪薪邪
                if (btn && btn.length > 0) {
                    // 袩褉邪胁懈谢褜薪褘械 芯斜褉邪斜芯褌褔懈泻懈 写谢褟 Lampa (泻邪泻 胁 写褉褍谐懈褏 锌谢邪谐懈薪邪褏)
                    btn.on('hover:enter', function() {
                        // 袩褉芯胁械褉褟械屑, 薪械 芯褌泻褉褘褌芯 谢懈 褍卸械 屑芯写邪谢褜薪芯械 芯泻薪芯
                        if (!document.querySelector('.drxaos-quick-theme-modal')) {
                            createQuickThemeModal();
                        }
                    });

                    btn.on('click', function() {
                        // 袩褉芯胁械褉褟械屑, 薪械 芯褌泻褉褘褌芯 谢懈 褍卸械 屑芯写邪谢褜薪芯械 芯泻薪芯
                        if (!document.querySelector('.drxaos-quick-theme-modal')) {
                            createQuickThemeModal();
                        }
                    });
                    
                    // 袨褌泻谢褞褔邪械屑 锌械褉械褏胁邪褌 褎芯泻褍褋邪 泻薪芯锌泻芯泄
                    btn.on('focus', function() {
                        // 小褉邪蟹褍 褍斜懈褉邪械屑 褎芯泻褍褋 褋 泻薪芯锌泻懈
                        setTimeout(function() {
                            btn.blur();
                        }, 100);
                    });
                    
                    // 袩褉械写芯褌胁褉邪褖邪械屑 锌芯谢褍褔械薪懈械 褎芯泻褍褋邪
                    btn.attr('tabindex', '-1');
                }

clearInterval(checkInterval);
}
}, 100);

setTimeout(function() {
clearInterval(checkInterval);
}, 10000);

        // 袛芯斜邪胁谢褟械屑 芯斜褉邪斜芯褌褔懈泻 写谢褟 芯褌褋谢械卸懈胁邪薪懈褟 懈蟹屑械薪械薪懈泄 胁 薪邪胁懈谐邪褑懈懈
        var lastHash = window.location.hash;
        setInterval(function() {
            var currentHash = window.location.hash;
            if (currentHash !== lastHash) {
                lastHash = currentHash;
                
                // 袙褋械谐写邪 胁芯褋褋褌邪薪邪胁谢懈胁邪械屑 泻薪芯锌泻褍 锌褉懈 薪邪胁懈谐邪褑懈懈
                if ($('.head__actions').length > 0 && $('#drxaos-quick-theme-btn').length === 0) {
                    var btn = $('<div class="head__action drxaos-theme-quick-btn selector" id="drxaos-quick-theme-btn" title="袘褘褋褌褉褘泄 胁褘斜芯褉 褌械屑褘" data-action="drxaos-quick-theme"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.71 4.63l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z" fill="currentColor"/></svg></div>');
                    $('.head__actions').prepend(btn);
                    
                    btn.on('hover:enter', function() {
                        // 袩褉芯胁械褉褟械屑, 薪械 芯褌泻褉褘褌芯 谢懈 褍卸械 屑芯写邪谢褜薪芯械 芯泻薪芯
                        if (!document.querySelector('.drxaos-quick-theme-modal')) {
                            createQuickThemeModal();
                        }
                    });
                    btn.on('click', function() {
                        // 袩褉芯胁械褉褟械屑, 薪械 芯褌泻褉褘褌芯 谢懈 褍卸械 屑芯写邪谢褜薪芯械 芯泻薪芯
                        if (!document.querySelector('.drxaos-quick-theme-modal')) {
                            createQuickThemeModal();
                        }
                    });
                    
                    // 袨褌泻谢褞褔邪械屑 锌械褉械褏胁邪褌 褎芯泻褍褋邪 泻薪芯锌泻芯泄
                    btn.on('focus', function() {
                        // 小褉邪蟹褍 褍斜懈褉邪械屑 褎芯泻褍褋 褋 泻薪芯锌泻懈
                        setTimeout(function() {
                            btn.blur();
                        }, 100);
                    });
                    
                    // 袩褉械写芯褌胁褉邪褖邪械屑 锌芯谢褍褔械薪懈械 褎芯泻褍褋邪
                    btn.attr('tabindex', '-1');
                }
            }
        }, 500);
        
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 写芯斜邪胁谢械薪懈褟 泻薪芯锌泻懈 斜褘褋褌褉芯谐芯 胁褘斜芯褉邪 褌械屑', e);
    }
}

function addSettings() {

Lampa.SettingsApi.addComponent({

component: 'drxaos_themes',

name: Lampa.Lang.translate('drxaos_themes'),

icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" fill="currentColor"/></svg>',

order: 0

});


// ============= 袧袗小孝袪袨袡袣袠 DRXAOS 孝袝袦 (袨孝 小袗袦袨袚袨 袩袨袥袝袟袧袨袚袨 袣 袦袝袧袝袝 袩袨袥袝袟袧袨袦校) =============

// 馃敟 小袗袦蝎袝 效袗小孝袨 袠小袩袨袥鞋袟校袝袦蝎袝 (芯褋薪芯胁薪褘械 薪邪褋褌褉芯泄泻懈)

// 1. 馃帹 笑胁械褌芯胁邪褟 褋褏械屑邪 - 袚袥袗袙袧袗携 薪邪褋褌褉芯泄泻邪 褌械屑
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'drxaos_theme',
        type: 'select',
        values: {
            'default': '小褌邪薪写邪褉褌薪邪褟',
            'cyberpunk': '馃敭 袣懈斜械褉锌邪薪泻',
            'matrix': '馃挌 袦邪褌褉懈褑邪',
            'retrowave': '馃寛 袪械褌褉芯胁芯谢薪邪',
            'iceblue': '鉂勶笍 袥械写褟薪邪褟',
            'monochrome': '鈿?袦芯薪芯褏褉芯屑',
            'yinyang': '鈽笍 袠薪褜-携薪褜',
            'sunset': '馃寘 袟邪泻邪褌',
            'ocean': '馃寠 袨泻械邪薪',
            'forest': '馃尣 袥械褋'
        },
        default: 'default'
    },
    field: {
        name: Lampa.Lang.translate('drxaos_theme'),
        description: Lampa.Lang.translate('drxaos_theme_desc')
    },
    onChange: applyTheme
});

// 2. 馃搹 袪邪蟹屑械褉 懈薪褌械褉褎械泄褋邪 - 薪芯胁邪褟 胁邪卸薪邪褟 薪邪褋褌褉芯泄泻邪
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'interface_size',
        type: 'select',
        default: 'normal',
        values: {
            'normal': Lampa.Lang.translate('interface_size_normal'),
            'small': Lampa.Lang.translate('interface_size_small'),
            'medium': Lampa.Lang.translate('interface_size_medium'),
            'large': Lampa.Lang.translate('interface_size_large'),
            'xlarge': Lampa.Lang.translate('interface_size_xlarge')
        }
    },
    field: {
        name: Lampa.Lang.translate('interface_size'),
        description: Lampa.Lang.translate('interface_size_desc')
    },
    onChange: function(v) {
        advancedSettings.interfaceSize = v;
        saveAdvancedSettings();
        applyAdvancedSettings();
    }
});

// 3. 鉁?小胁械褔械薪懈械 - 胁懈蟹褍邪谢褜薪褘泄 褝褎褎械泻褌
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'drxaos_glow',
        type: 'select',
        values: {
            'off': '袙褘泻谢褞褔械薪芯',
            'low': '小谢邪斜芯械',
            'medium': '小褉械写薪械械',
            'high': '小懈谢褜薪芯械'
        },
        default: 'medium'
    },
    field: {
        name: Lampa.Lang.translate('drxaos_glow'),
        description: Lampa.Lang.translate('drxaos_glow_desc')
    },
    onChange: function() {
        applyAdvancedSettings();
        applyGlow();
    }
});

// 4. 馃敇 袩芯谢薪褘械 薪邪蟹胁邪薪懈褟 泻薪芯锌芯泻 - 褍写芯斜褋褌胁芯 懈褋锌芯谢褜蟹芯胁邪薪懈褟
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'drxaos_fullbuttons',
        type: 'trigger',
        default: false
    },
    field: {
        name: Lampa.Lang.translate('drxaos_fullbuttons'),
        description: Lampa.Lang.translate('drxaos_fullbuttons_desc')
    },
    onChange: applyFullButtons
});

// 馃敡 效袗小孝袨 袠小袩袨袥鞋袟校袝袦蝎袝 (薪邪褋褌褉芯泄泻懈 泻芯屑褎芯褉褌邪)

// 5. 馃幀 袗薪懈屑邪褑懈懈 - 锌褉芯懈蟹胁芯写懈褌械谢褜薪芯褋褌褜
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'drxaos_animations',
        type: 'trigger',
        default: true
    },
    field: {
        name: Lampa.Lang.translate('drxaos_animations'),
        description: Lampa.Lang.translate('drxaos_animations_desc')
    },
    onChange: applyAnimations
});

// 6. 馃憗锔?袩褉芯蟹褉邪褔薪芯褋褌褜 - 胁懈蟹褍邪谢褜薪褘泄 泻芯屑褎芯褉褌
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'drxaos_transparency',
        type: 'select',
        values: {
            '10': '10%',
            '20': '20%',
            '30': '30%',
            '40': '40%',
            '50': '50%',
            '60': '60%',
            '70': '70%',
            '80': '80%',
            '85': '85%',
            '90': '90%',
            '95': '95%',
            '100': '100%'
        },
        default: '85'
    },
    field: {
        name: Lampa.Lang.translate('drxaos_transparency'),
        description: Lampa.Lang.translate('drxaos_transparency_desc')
    },
    onChange: function() {
        applyAdvancedSettings();
    }
});

// 7. 馃摑 孝芯谢褖懈薪邪 褕褉懈褎褌邪 - 褔懈褌邪械屑芯褋褌褜
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'drxaos_font_weight',
        type: 'select',
        values: {
            '400': '袨斜褘褔薪褘泄',
            '600': '袩芯谢褍卸懈褉薪褘泄',
            '700': '袞懈褉薪褘泄',
            '800': '袨褔械薪褜 卸懈褉薪褘泄',
            '900': '袞懈褉薪械泄褕懈泄'
        },
        default: '400'
    },
    field: {
        name: Lampa.Lang.translate('drxaos_font_weight'),
        description: Lampa.Lang.translate('drxaos_font_weight_desc')
    },
    onChange: applyFontWeight
});

// 馃幆 袪袝袛袣袨 袠小袩袨袥鞋袟校袝袦蝎袝 (褌芯薪泻邪褟 薪邪褋褌褉芯泄泻邪)

// 8. 馃柤锔?孝芯谢褖懈薪邪 芯斜胁芯写泻懈 锌芯褋褌械褉芯胁
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'poster_border_width',
        type: 'select',
        values: {
            '1': '1px',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '6': '6px',
            '8': '8px',
            '10': '10px'
        },
        default: '2'
    },
    field: {
        name: '孝芯谢褖懈薪邪 芯斜胁芯写泻懈 锌芯褋褌械褉芯胁',
        description: '孝芯谢褖懈薪邪 褉邪屑泻懈 胁芯泻褉褍谐 锌芯褋褌械褉芯胁 褎懈谢褜屑芯胁'
    },
    onChange: function(v) {
        advancedSettings.posterBorderWidth = parseInt(v) || 2;
        saveAdvancedSettings();
        applyAdvancedSettings();
    }
});

// 9. 馃攧 小泻褉褍谐谢械薪懈械 褍谐谢芯胁 锌芯褋褌械褉芯胁
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'poster_border_radius',
        type: 'select',
        values: {
            '0': '0px (泻胁邪写褉邪褌薪褘械)',
            '0.5': '0.5em (褋谢械谐泻邪 褋泻褉褍谐谢械薪薪褘械)',
            '1': '1em (褋泻褉褍谐谢械薪薪褘械)',
            '1.5': '1.5em (褋懈谢褜薪芯 褋泻褉褍谐谢械薪薪褘械)',
            '2': '2em (芯褔械薪褜 褋泻褉褍谐谢械薪薪褘械)',
            '50': '50% (泻褉褍谐谢褘械)'
        },
        default: '1'
    },
    field: {
        name: '小泻褉褍谐谢械薪懈械 褍谐谢芯胁 锌芯褋褌械褉芯胁',
        description: '小褌械锌械薪褜 褋泻褉褍谐谢械薪懈褟 褍谐谢芯胁 锌芯褋褌械褉芯胁'
    },
    onChange: function(v) {
        advancedSettings.posterBorderRadius = v;
        saveAdvancedSettings();
        applyAdvancedSettings();
    }
});

// 10. 馃挮 袠薪褌械薪褋懈胁薪芯褋褌褜 褋胁械褔械薪懈褟 芯斜胁芯写芯泻
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'poster_glow_intensity',
        type: 'select',
        values: {
            '0': '0px (斜械蟹 褋胁械褔械薪懈褟)',
            '5': '5px (褋谢邪斜芯械)',
            '10': '10px (褍屑械褉械薪薪芯械)',
            '15': '15px (褋懈谢褜薪芯械)',
            '20': '20px (芯褔械薪褜 褋懈谢褜薪芯械)',
            '30': '30px (屑邪泻褋懈屑邪谢褜薪芯械)'
        },
        default: '10'
    },
    field: {
        name: '袠薪褌械薪褋懈胁薪芯褋褌褜 褋胁械褔械薪懈褟',
        description: '小懈谢邪 褋胁械褔械薪懈褟 芯斜胁芯写芯泻 锌芯褋褌械褉芯胁'
    },
    onChange: function(v) {
        advancedSettings.posterGlowIntensity = parseInt(v) || 10;
        saveAdvancedSettings();
        applyAdvancedSettings();
    }
});

// 11. 鈿?小泻芯褉芯褋褌褜 邪薪懈屑邪褑懈懈 芯斜胁芯写芯泻
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'poster_animation_speed',
        type: 'select',
        values: {
            '0.1': '0.1s (芯褔械薪褜 斜褘褋褌褉芯)',
            '0.2': '0.2s (斜褘褋褌褉芯)',
            '0.3': '0.3s (薪芯褉屑邪谢褜薪芯)',
            '0.5': '0.5s (屑械写谢械薪薪芯)',
            '0.8': '0.8s (芯褔械薪褜 屑械写谢械薪薪芯)',
            '1': '1s (屑邪泻褋懈屑邪谢褜薪芯 屑械写谢械薪薪芯)'
        },
        default: '0.3'
    },
    field: {
        name: '小泻芯褉芯褋褌褜 邪薪懈屑邪褑懈懈 芯斜胁芯写芯泻',
        description: '小泻芯褉芯褋褌褜 锌芯褟胁谢械薪懈褟/懈褋褔械蟹薪芯胁械薪懈褟 芯斜胁芯写芯泻'
    },
    onChange: function(v) {
        advancedSettings.posterAnimationSpeed = parseFloat(v) || 0.3;
        saveAdvancedSettings();
        applyAdvancedSettings();
    }
});

// 12. 馃帹 袩褉芯蟹褉邪褔薪芯褋褌褜 褎芯薪邪 泻邪褉褌芯褔械泻
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'card_background_opacity',
        type: 'select',
        values: {
            '0': '0% (锌芯谢薪芯褋褌褜褞 锌褉芯蟹褉邪褔薪褘泄)',
            '10': '10% (芯褔械薪褜 锌褉芯蟹褉邪褔薪褘泄)',
            '20': '20% (锌褉芯蟹褉邪褔薪褘泄)',
            '30': '30% (褋谢械谐泻邪 锌褉芯蟹褉邪褔薪褘泄)',
            '50': '50% (锌芯谢褍锌褉芯蟹褉邪褔薪褘泄)',
            '70': '70% (锌芯褔褌懈 薪械锌褉芯蟹褉邪褔薪褘泄)',
            '90': '90% (锌芯褔褌懈 锌芯谢薪芯褋褌褜褞 薪械锌褉芯蟹褉邪褔薪褘泄)',
            '100': '100% (锌芯谢薪芯褋褌褜褞 薪械锌褉芯蟹褉邪褔薪褘泄)'
        },
        default: '70'
    },
    field: {
        name: '袩褉芯蟹褉邪褔薪芯褋褌褜 褎芯薪邪 泻邪褉褌芯褔械泻',
        description: '袩褉芯蟹褉邪褔薪芯褋褌褜 褎芯薪芯胁芯谐芯 褋谢芯褟 泻邪褉褌芯褔械泻'
    },
    onChange: function(v) {
        advancedSettings.cardBackgroundOpacity = parseInt(v) || 70;
        saveAdvancedSettings();
        applyAdvancedSettings();
    }
});

// 13. 馃搱 袦邪褋褕褌邪斜 锌褉懈 薪邪胁械写械薪懈懈
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'hover_scale',
        type: 'select',
        values: {
            '1.0': '1.0x',
            '1.02': '1.02x',
            '1.05': '1.05x',
            '1.08': '1.08x',
            '1.1': '1.1x',
            '1.15': '1.15x',
            '1.2': '1.2x',
            '1.25': '1.25x',
            '1.3': '1.3x'
        },
        default: '1.05'
    },
    field: {
        name: '袦邪褋褕褌邪斜 锌褉懈 薪邪胁械写械薪懈懈',
        description: '校胁械谢懈褔械薪懈械 泻邪褉褌芯褔械泻 锌褉懈 薪邪胁械写械薪懈懈'
    },
    onChange: function(v) {
        advancedSettings.hoverScale = parseFloat(v) || 1.05;
        saveAdvancedSettings();
        applyAdvancedSettings();
    }
});

// 14. 鈴憋笍 小泻芯褉芯褋褌褜 邪薪懈屑邪褑懈懈
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'animation_speed',
        type: 'select',
        values: {
            '0.1': '袨褔械薪褜 斜褘褋褌褉芯 (0.1褋)',
            '0.2': '袘褘褋褌褉芯 (0.2褋)',
            '0.3': '小褉械写薪械 (0.3褋)',
            '0.5': '袦械写谢械薪薪芯 (0.5褋)',
            '0.8': '袨褔械薪褜 屑械写谢械薪薪芯 (0.8褋)',
            '1.0': '袦邪泻褋懈屑邪谢褜薪芯 屑械写谢械薪薪芯 (1.0褋)'
        },
        default: '0.3'
    },
    field: {
        name: '鈿?小泻芯褉芯褋褌褜 邪薪懈屑邪褑懈懈',
        description: '袧邪褋褌褉芯泄泻邪 褋泻芯褉芯褋褌懈 邪薪懈屑邪褑懈泄 写谢褟 褍屑械薪褜褕械薪懈褟 谢邪谐芯胁 懈 锌芯胁褘褕械薪懈褟 斜褘褋褌褉芯写械泄褋褌胁懈褟'
    },
    onChange: function(v) {
        advancedSettings.animationSpeed = parseFloat(v) || 0.3;
        saveAdvancedSettings();
        applyAdvancedSettings();
    }
});

// 馃洜锔?小袥校袞袝袘袧蝎袝 (胁 泻芯薪褑械)

// 15. 馃攧 小斜褉芯褋 褉邪褋褕懈褉械薪薪褘褏 薪邪褋褌褉芯械泻
Lampa.SettingsApi.addParam({
    component: 'drxaos_themes',
    param: {
        name: 'reset_advanced',
        type: 'trigger',
        default: false
    },
    field: {
        name: '馃攧 小斜褉芯褋懈褌褜 褉邪褋褕懈褉械薪薪褘械 薪邪褋褌褉芯泄泻懈',
        description: '袙械褉薪褍褌褜 胁褋械 褉邪褋褕懈褉械薪薪褘械 薪邪褋褌褉芯泄泻懈 泻 蟹薪邪褔械薪懈褟屑 锌芯 褍屑芯谢褔邪薪懈褞'
    },
    onChange: function() {
        advancedSettings = {
            cardBrightness: 100,
            cardSaturation: 100,
            shadowOpacity: 40,
            animationSpeed: 0.3,
            hoverScale: 1.05,
            modalOpacity: 95,
            modalBlur: 50,
            // 袧芯胁褘械 薪邪褋褌褉芯泄泻懈
            posterBorderWidth: 2,
            posterBorderRadius: '1',
            posterGlowIntensity: 10,
            posterAnimationSpeed: 0.3,
            cardBackgroundOpacity: 70,
            interfaceSize: 'normal',
            modalRadius: 2,
            menuWidth: 20,
            menuOpacity: 95,
            menuBlur: 30,
            contrast: 100,
            brightness: 100,
            saturation: 100,
            hue: 0
        };
        saveAdvancedSettings();
        applyAdvancedSettings();
        Lampa.Noty.show('鉁?袪邪褋褕懈褉械薪薪褘械 薪邪褋褌褉芯泄泻懈 褋斜褉芯褕械薪褘!');
    }
});
}

function reorderButtons() {
    try {
        if (!window.jQuery || !window.$) return;
var buttonInterval = setInterval(function() {

var $buttonsContainer = $('.full-start__buttons');

if ($buttonsContainer.length > 0) {

var buttons = [];

var $onlineBtn = null;

var $torrentsBtn = null;

var $watchBtn = null;

var $favoriteBtn = null;

$buttonsContainer.find('.full-start__button').each(function() {

var $btn = $(this);

var text = $btn.find('span').text().trim();

if (text === '袨薪谢邪泄薪' || text === 'Online') {

$onlineBtn = $btn.clone();

$onlineBtn.find('svg').html('<path d="M8 5v14l11-7z" fill="currentColor"/>').attr('viewBox', '0 0 24 24');

} 

else if (text === '小屑芯褌褉械褌褜' || text === 'Watch' || text === '袛懈胁懈褌懈褋褟') {

$watchBtn = $btn.clone();

$watchBtn.find('svg').html('<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor"/>').attr('viewBox', '0 0 24 24');

} 

else if (text === '孝芯褉褉械薪褌褘' || text === 'Torrents') {

$torrentsBtn = $btn.clone();

$torrentsBtn.find('svg').html('<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z" fill="currentColor"/>').attr('viewBox', '0 0 24 24');

} 

else if (text === '袠蟹斜褉邪薪薪芯械' || text === 'Favorite' || text === '袨斜褉邪薪械') {

$favoriteBtn = $btn.clone();

}

});

if ($onlineBtn && $watchBtn) {

$buttonsContainer.empty();

$buttonsContainer.append($onlineBtn);

if ($torrentsBtn) {

$buttonsContainer.append($torrentsBtn);

}

$buttonsContainer.append($watchBtn);

if ($favoriteBtn) {

$buttonsContainer.append($favoriteBtn);

}

clearInterval(buttonInterval);

}

}

}, 100);

setTimeout(function() {

clearInterval(buttonInterval);

}, 5000);
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 锌械褉械褍锌芯褉褟写芯褔懈胁邪薪懈褟 泻薪芯锌芯泻', e);
    }
}

function startPlugin() {
    try {
// lampaLogger.log('袟邪锌褍褋泻 锌谢邪谐懈薪邪 DRXAOS Themes', { version: '2025', device: deviceDetection.getDeviceType() });

// 袩褉懈屑械薪褟械屑 芯锌褌懈屑懈蟹邪褑懈懈 褉械薪写械褉懈薪谐邪 薪邪 芯褋薪芯胁械 HTML Canvas 褋锌械褑懈褎懈泻邪褑懈懈
renderingOptimizer.applyOptimizations();

// 袛芯锌芯谢薪懈褌械谢褜薪芯械 懈褋锌褉邪胁谢械薪懈械 褍褋褌邪褉械胁褕懈褏 褝谢械屑械薪褌芯胁
setTimeout(function() {
    renderingOptimizer.fixDeprecatedSliders();
}, 1000);

// 袧邪褋褌褉芯泄泻邪 薪邪斜谢褞写邪褌械谢褟 蟹邪 写懈薪邪屑懈褔械褋泻懈屑懈 褝谢械屑械薪褌邪屑懈
var dynamicObserver = renderingOptimizer.setupDynamicElementObserver();

addSettings();

var theme = Lampa.Storage.get('drxaos_theme', 'default');
// lampaLogger.log('袟邪谐褉褍卸械薪邪 褋芯褏褉邪薪械薪薪邪褟 褌械屑邪', { theme: theme });

applyTheme(theme);
applyAdvancedSettings();

addQuickThemeButton();
// lampaLogger.log('袩谢邪谐懈薪 褍褋锌械褕薪芯 蟹邪锌褍褖械薪');

reorderButtons();

Lampa.Listener.follow('full', function(e) {

if (e.type === 'complite') {

setTimeout(reorderButtons, 300);

}

});
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 蟹邪锌褍褋泻邪 锌谢邪谐懈薪邪', e);
    }
}

if (window.appready) {
    try {
        startPlugin();
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 蟹邪锌褍褋泻邪 锌谢邪谐懈薪邪 (app ready)', e);
    }
} else {
    try {
Lampa.Listener.follow('app', function(e) {
            if (e.type == 'ready') {
                try {
                    startPlugin();
                } catch(e) {
                    // lampaLogger.error('袨褕懈斜泻邪 蟹邪锌褍褋泻邪 锌谢邪谐懈薪邪 (listener)', e);
                }
            }
        });
    } catch(e) {
        // lampaLogger.error('袨褕懈斜泻邪 薪邪褋褌褉芯泄泻懈 listener', e);
    }
}



    // ============= UI 袪袗小楔袠袪袝袧袧蝎啸 袧袗小孝袪袨袝袣 =============
    // 袪邪褋褕懈褉械薪薪褘械 薪邪褋褌褉芯泄泻懈 褌械锌械褉褜 褉械谐懈褋褌褉懈褉褍褞褌褋褟 褔械褉械蟹 SettingsApi 胁褘褕械

    // 袗胁褌芯懈薪懈褑懈邪谢懈蟹邪褑懈褟 锌褉懈 蟹邪谐褉褍蟹泻械 Lampa
    if (window.Lampa) {
        try {
        $(document).ready(function() {
            setTimeout(function() {
                    try {
                applyAdvancedSettings();
                        var theme = Lampa.Storage.get('drxaos_theme', 'default');
                        applyTheme(theme);
                    } catch(e) {
                        // lampaLogger.error('袨褕懈斜泻邪 邪胁褌芯屑邪褌懈褔械褋泻芯泄 懈薪懈褑懈邪谢懈蟹邪褑懈懈', e);
                    }
            }, 1000);
        });
        } catch(e) {
            // lampaLogger.error('袨褕懈斜泻邪 懈薪懈褑懈邪谢懈蟹邪褑懈懈 (document ready)', e);
        }
    }

    // 小芯蟹写邪械屑 芯斜胁芯写泻懈 锌芯褋褌械褉芯胁 锌褉懈 蟹邪谐褉褍蟹泻械
    setTimeout(function() {
        createPosterOutlines();
    }, 3000);

    // 袚谢芯斜邪谢褜薪褘泄 芯斜褉邪斜芯褌褔懈泻 Esc 写谢褟 胁褘褏芯写邪 懈蟹 屑芯写邪谢褜薪芯谐芯 芯泻薪邪 胁褘斜芯褉邪 褌械屑
    $(document).on('keydown.drxaosGlobalEsc', function(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            // 袩褉芯胁械褉褟械屑, 械褋褌褜 谢懈 芯褌泻褉褘褌芯械 屑芯写邪谢褜薪芯械 芯泻薪芯
            var $modal = $('.drxaos-quick-theme-modal');
            if ($modal.length > 0 && $modal.is(':visible')) {
                // 袦芯写邪谢褜薪芯械 芯泻薪芯 芯褌泻褉褘褌芯 - 蟹邪泻褉褘胁邪械屑 械谐芯
                $modal.fadeOut(200, function() {
                    $modal.remove();
                });
                
                // 校斜懈褉邪械屑 褎芯泻褍褋 懈 胁芯蟹胁褉邪褖邪械屑 薪邪 泻薪芯锌泻褍
                if (document.activeElement && document.activeElement.blur) {
                    document.activeElement.blur();
                }
                
                setTimeout(function() {
                    var $btn = $('#drxaos-quick-theme-btn');
                    if ($btn.length) {
                        $btn.focus();
                    }
                }, 300);
            }
        }
    });

    // 袩袪袠袧校袛袠孝袝袥鞋袧蝎袝 小孝袠袥袠 袛袥携 袣袧袨袩袣袠 肖袠袥鞋孝袪袗 - 袦袗袣小袠袦袗袥鞋袧袗携 小袩袝笑袠肖袠效袧袨小孝鞋
    setTimeout(function() {
        var filterButtonCSS = `
            /* 袛袠袧袗袦袠效袝小袣袠袝 小孝袠袥袠 袛袥携 袣袧袨袩袣袠 肖袠袥鞋孝袪袗 - 小袨袨孝袙袝孝小孝袙校挟孝 孝袝袦袝 */
            div.simple-button.simple-button--filter.filter--filter.selector {
                background: var(--glass-bg, rgba(0,0,0,0.7)) !important;
                border: 2px solid var(--theme-primary, #5a3494) !important;
                border-radius: 2em !important;
                color: var(--text-main, #ffffff) !important;
                font-family: var(--font-family) !important;
                font-size: 0.9em !important;
                padding: 0.8em 1.5em !important;
                margin: 0.3em !important;
                transition: all 0.3s ease !important;
                backdrop-filter: blur(20px) saturate(180%) !important;
                -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
                display: flex !important;
                align-items: center !important;
                gap: 0.5em !important;
                min-height: 2.5em !important;
            }
            
            div.simple-button.simple-button--filter.filter--filter.selector:hover {
                background: var(--theme-primary, #5a3494) !important;
                border: 2px solid var(--theme-accent, #0088bb) !important;
                border-radius: 2.5em !important;
                color: var(--text-contrast, #ffffff) !important;
                box-shadow: 0 0 20px var(--theme-primary, #5a3494), 0 6px 15px rgba(0,0,0,0.4) !important;
                transform: scale(1.02) !important;
            }
            
            div.simple-button.simple-button--filter.filter--filter.selector.focus {
                background: var(--theme-accent, #0088bb) !important;
                border: 2px solid var(--theme-primary, #5a3494) !important;
                border-radius: 2.5em !important;
                color: var(--text-contrast, #ffffff) !important;
                box-shadow: 0 0 30px var(--theme-accent, #0088bb), 0 6px 15px rgba(0,0,0,0.4) !important;
                transform: scale(1.02) !important;
            }
            
            /* 袠小袩袪袗袙袥袝袧袠袝 袩袪袨袘袥袝袦蝎 小 袪袗袦袣袗袦袠 袙 袦袨袛袗袥鞋袧蝎啸 袨袣袧袗啸 */
            .modal .simple-button,
            .modal .selector,
            .modal .menu__item,
            .modal .settings-param {
                border: 1px solid var(--theme-primary, #5a3494) !important;
                margin: 0.3em !important;
                padding: 0.8em 1em !important;
                min-height: auto !important;
                display: block !important;
                transition: all 0.3s ease !important;
            }
            
.modal .simple-button:hover,
.modal .selector:hover,
.modal .menu__item:hover,
.modal .settings-param:hover {
    border: 1px solid var(--theme-accent, #0088bb) !important;
    /* 校斜褉邪薪芯 褍胁械谢懈褔械薪懈械 锌褉懈 薪邪胁械写械薪懈懈 */
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}
        `;
        
        var style = document.createElement('style');
        style.id = 'drxaos-filter-button-fix';
        style.textContent = filterButtonCSS;
        document.head.appendChild(style);
        
        // lampaLogger.log('袩褉懈薪褍写懈褌械谢褜薪褘械 褋褌懈谢懈 写谢褟 泻薪芯锌泻懈 褎懈谢褜褌褉邪 锌褉懈屑械薪械薪褘');
        
        // 袩袪袠袧校袛袠孝袝袥鞋袧袨袝 袩袪袠袦袝袧袝袧袠袝 小孝袠袥袝袡 效袝袪袝袟 JAVASCRIPT
        setTimeout(function() {
            // 孝芯褔薪褘械 褋械谢械泻褌芯褉褘 薪邪 芯褋薪芯胁械 HTML 褋褌褉褍泻褌褍褉褘
            var filterButtons = document.querySelectorAll('div.simple-button.simple-button--filter.filter--filter.selector');
            
            filterButtons.forEach(function(button) {
                if (button) {
                    // 袩褉懈薪褍写懈褌械谢褜薪芯 锌褉懈屑械薪褟械屑 写懈薪邪屑懈褔械褋泻懈械 褋褌懈谢懈
                    button.style.setProperty('background', 'var(--glass-bg, rgba(0,0,0,0.7))', 'important');
                    button.style.setProperty('border', '2px solid var(--theme-primary, #5a3494)', 'important');
                    button.style.setProperty('border-radius', '2em', 'important');
                    button.style.setProperty('color', 'var(--text-main, #ffffff)', 'important');
                    button.style.setProperty('font-family', 'var(--font-family)', 'important');
                    button.style.setProperty('font-size', '0.9em', 'important');
                    button.style.setProperty('padding', '0.8em 1.5em', 'important');
                    button.style.setProperty('margin', '0.3em', 'important');
                    button.style.setProperty('transition', 'all 0.3s ease', 'important');
                    button.style.setProperty('backdrop-filter', 'blur(20px) saturate(180%)', 'important');
                    button.style.setProperty('-webkit-backdrop-filter', 'blur(20px) saturate(180%)', 'important');
                    button.style.setProperty('box-shadow', '0 4px 12px rgba(0,0,0,0.3)', 'important');
                    button.style.setProperty('display', 'flex', 'important');
                    button.style.setProperty('align-items', 'center', 'important');
                    button.style.setProperty('gap', '0.5em', 'important');
                    button.style.setProperty('min-height', '2.5em', 'important');
                    
                    // lampaLogger.log('袛懈薪邪屑懈褔械褋泻懈械 褋褌懈谢懈 锌褉懈屑械薪械薪褘 泻 泻薪芯锌泻械 褎懈谢褜褌褉邪');
                }
            });
        }, 1500);
    }, 1000);

})();
