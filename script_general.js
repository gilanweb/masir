(function () {
  var translateObjs = {};

  function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
  }

  function regTextVar(f, g) {
    var h = ![];
    return i(g);

    function i(p, q) {
      switch (p['toLowerCase']()) {
      case 'title':
      case 'subtitle':
      case 'photo.title':
      case 'photo.description':
        var s = function () {
          switch (p['toLowerCase']()) {
          case 'title':
          case 'photo.title':
            return 'media.label';
          case 'subtitle':
            return 'media.data.subtitle';
          case 'photo.description':
            return 'media.data.description';
          }
        }();
        if (s) {
          return function () {
            var x, y;
            var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
            if (p['toLowerCase']()['startsWith']('photo'))
              x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                var C = B['get']('player');
                return C && C['get']('viewerArea') == z;
              })['map'](function (D) {
                return D['get']('media')['get']('playList');
              });
            else {
              x = this['_getPlayListsWithViewer'](z);
              y = o['bind'](this, z);
            }
            if (!h) {
              for (var A = 0x0; A < x['length']; ++A) {
                x[A]['bind']('changing', k, this);
              }
              h = !![];
            }
            return n['call'](this, x, s, y);
          };
        }
        break;
      case 'tour.name':
      case 'tour.description':
        return function () {
          return this['get']('data')['tour']['locManager']['trans'](p);
        };
      default:
        if (p['toLowerCase']()['startsWith']('viewer.')) {
          var t = p['split']('.');
          var u = t[0x1];
          if (u) {
            var v = t['slice'](0x2)['join']('.');
            return i(v, {
              'viewerName': u
            });
          }
        } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
          var w = undefined;
          var s = function () {
            switch (p['toLowerCase']()) {
            case 'quiz.questions.answered':
              return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
            case 'quiz.question.count':
              return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
            case 'quiz.items.found':
              return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
            case 'quiz.item.count':
              return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
            case 'quiz.score':
              return TDV['Quiz']['PROPERTY']['SCORE'];
            case 'quiz.score.total':
              return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
            case 'quiz.time.remaining':
              return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
            case 'quiz.time.elapsed':
              return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
            case 'quiz.time.limit':
              return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
            case 'quiz.media.items.found':
              return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
            case 'quiz.media.item.count':
              return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
            case 'quiz.media.questions.answered':
              return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
            case 'quiz.media.question.count':
              return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
            case 'quiz.media.score':
              return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
            case 'quiz.media.score.total':
              return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
            case 'quiz.media.index':
              return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
            case 'quiz.media.count':
              return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
            case 'quiz.media.visited':
              return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
            default:
              var E = /quiz\.([\w_]+)\.(.+)/ ['exec'](p);
              if (E) {
                w = E[0x1];
                switch ('quiz.' + E[0x2]) {
                case 'quiz.score':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                case 'quiz.score.total':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                case 'quiz.media.items.found':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.questions.answered':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                case 'quiz.media.score':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                  return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                }
              }
            }
          }();
          if (s) {
            return function () {
              var F = this['get']('data')['quiz'];
              if (F) {
                if (!h) {
                  if (w != undefined)
                    if (w == 'global') {
                      var H = this['get']('data')['quizConfig'];
                      var J = H['objectives'];
                      for (var L = 0x0, N = J['length']; L < N; ++L) {
                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                      }
                    } else {
                      F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                    }
                  else
                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                  h = !![];
                }
                try {
                  var O = 0x0;
                  if (w != undefined) {
                    if (w == 'global') {
                      var H = this['get']('data')['quizConfig'];
                      var J = H['objectives'];
                      for (var L = 0x0, N = J['length']; L < N; ++L) {
                        O += F['getObjective'](J[L]['id'], s);
                      }
                    } else {
                      O = F['getObjective'](w, s);
                    }
                  } else {
                    O = F['get'](s);
                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                      O += 0x1;
                  }
                  return O;
                } catch (P) {
                  return undefined;
                }
              }
            };
          }
        }
        break;
      }
      return function () {
        return '';
      };
    }

    function j() {
      var Q = this['get']('data');
      Q['updateText'](Q['translateObjs'][f]);
    }

    function k(R) {
      var S = R['data']['nextSelectedIndex'];
      if (S >= 0x0) {
        var T = R['source']['get']('items')[S];
        var U = function () {
          T['unbind']('begin', U, this);
          j['call'](this);
        };
        T['bind']('begin', U, this);
      }
    }

    function l(V) {
      return function (W) {
        if (V in W) {
          j['call'](this);
        }
      } ['bind'](this);
    }

    function m(X, Y) {
      return function (Z, a0) {
        if (X == Z && Y in a0) {
          j['call'](this);
        }
      } ['bind'](this);
    }

    function n(a1, a2, a3) {
      for (var a4 = 0x0; a4 < a1['length']; ++a4) {
        var a5 = a1[a4];
        var a6 = a5['get']('selectedIndex');
        if (a6 >= 0x0) {
          var a7 = a2['split']('.');
          var a8 = a5['get']('items')[a6];
          if (a3 !== undefined && !a3['call'](this, a8))
            continue;
          for (var a9 = 0x0; a9 < a7['length']; ++a9) {
            if (a8 == undefined)
              return '';
            a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
          }
          return a8;
        }
      }
      return '';
    }

    function o(aa, ab) {
      var ac = ab['get']('player');
      return ac !== undefined && ac['get']('viewerArea') == aa;
    }
  }
  var script = {
    "id": "rootPlayer",
    "minHeight": 0,
    "children": ["this.MainViewer"],
    "backgroundColor": ["#FFFFFF"],
    "start": "this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])",
    "data": {
      "defaultLocale": "en",
      "textToSpeechConfig": {
        "stopBackgroundAudio": false,
        "rate": 1,
        "speechOnQuizQuestion": false,
        "volume": 1,
        "speechOnTooltip": false,
        "speechOnInfoWindow": false,
        "pitch": 1
      },
      "name": "Player736",
      "locales": {
        "en": "locale/en.txt"
      },
      "history": {}
    },
    "backgroundColorRatios": [0],
    "propagateClick": false,
    "watermark": false,
    "width": "100%",
    "scripts": {
      "quizShowTimeout": TDV.Tour.Script.quizShowTimeout,
      "getQuizTotalObjectiveProperty": TDV.Tour.Script.getQuizTotalObjectiveProperty,
      "getActivePlayerWithViewer": TDV.Tour.Script.getActivePlayerWithViewer,
      "sendAnalyticsData": TDV.Tour.Script.sendAnalyticsData,
      "updateMediaLabelFromPlayList": TDV.Tour.Script.updateMediaLabelFromPlayList,
      "changePlayListWithSameSpot": TDV.Tour.Script.changePlayListWithSameSpot,
      "quizShowScore": TDV.Tour.Script.quizShowScore,
      "getMediaWidth": TDV.Tour.Script.getMediaWidth,
      "setPanoramaCameraWithCurrentSpot": TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,
      "setMainMediaByName": TDV.Tour.Script.setMainMediaByName,
      "getMediaByName": TDV.Tour.Script.getMediaByName,
      "clonePanoramaCamera": TDV.Tour.Script.clonePanoramaCamera,
      "getPanoramaOverlaysByTags": TDV.Tour.Script.getPanoramaOverlaysByTags,
      "setOverlaysVisibility": TDV.Tour.Script.setOverlaysVisibility,
      "quizPauseTimer": TDV.Tour.Script.quizPauseTimer,
      "_getPlayListsWithViewer": TDV.Tour.Script._getPlayListsWithViewer,
      "registerKey": TDV.Tour.Script.registerKey,
      "setSurfaceSelectionHotspotMode": TDV.Tour.Script.setSurfaceSelectionHotspotMode,
      "getPlayListWithItem": TDV.Tour.Script.getPlayListWithItem,
      "setStartTimeVideo": TDV.Tour.Script.setStartTimeVideo,
      "initQuiz": TDV.Tour.Script.initQuiz,
      "isPanorama": TDV.Tour.Script.isPanorama,
      "assignObjRecursively": TDV.Tour.Script.assignObjRecursively,
      "getKey": TDV.Tour.Script.getKey,
      "setDirectionalPanoramaAudio": TDV.Tour.Script.setDirectionalPanoramaAudio,
      "getModel3DInnerObject": TDV.Tour.Script.getModel3DInnerObject,
      "getActiveMediaWithViewer": TDV.Tour.Script.getActiveMediaWithViewer,
      "getOverlays": TDV.Tour.Script.getOverlays,
      "getMediaHeight": TDV.Tour.Script.getMediaHeight,
      "stopGlobalAudio": TDV.Tour.Script.stopGlobalAudio,
      "cleanAllMeasurements": TDV.Tour.Script.cleanAllMeasurements,
      "shareSocial": TDV.Tour.Script.shareSocial,
      "executeAudioAction": TDV.Tour.Script.executeAudioAction,
      "getMediaFromPlayer": TDV.Tour.Script.getMediaFromPlayer,
      "startPanoramaWithModel": TDV.Tour.Script.startPanoramaWithModel,
      "getPanoramaOverlayByName": TDV.Tour.Script.getPanoramaOverlayByName,
      "getCurrentPlayers": TDV.Tour.Script.getCurrentPlayers,
      "setModel3DCameraSpot": TDV.Tour.Script.setModel3DCameraSpot,
      "translate": TDV.Tour.Script.translate,
      "_initTTSTooltips": TDV.Tour.Script._initTTSTooltips,
      "showPopupMedia": TDV.Tour.Script.showPopupMedia,
      "setOverlaysVisibilityByTags": TDV.Tour.Script.setOverlaysVisibilityByTags,
      "init": TDV.Tour.Script.init,
      "setComponentVisibility": TDV.Tour.Script.setComponentVisibility,
      "createTween": TDV.Tour.Script.createTween,
      "setModel3DCameraSequence": TDV.Tour.Script.setModel3DCameraSequence,
      "copyToClipboard": TDV.Tour.Script.copyToClipboard,
      "playAudioList": TDV.Tour.Script.playAudioList,
      "setComponentsVisibilityByTags": TDV.Tour.Script.setComponentsVisibilityByTags,
      "setMainMediaByIndex": TDV.Tour.Script.setMainMediaByIndex,
      "playGlobalAudio": TDV.Tour.Script.playGlobalAudio,
      "unregisterKey": TDV.Tour.Script.unregisterKey,
      "setLocale": TDV.Tour.Script.setLocale,
      "getMainViewer": TDV.Tour.Script.getMainViewer,
      "_getObjectsByTags": TDV.Tour.Script._getObjectsByTags,
      "textToSpeechComponent": TDV.Tour.Script.textToSpeechComponent,
      "getOverlaysByTags": TDV.Tour.Script.getOverlaysByTags,
      "showPopupPanoramaVideoOverlay": TDV.Tour.Script.showPopupPanoramaVideoOverlay,
      "getCurrentPlayerWithMedia": TDV.Tour.Script.getCurrentPlayerWithMedia,
      "skip3DTransitionOnce": TDV.Tour.Script.skip3DTransitionOnce,
      "getAudioByTags": TDV.Tour.Script.getAudioByTags,
      "getOverlaysByGroupname": TDV.Tour.Script.getOverlaysByGroupname,
      "updateDeepLink": TDV.Tour.Script.updateDeepLink,
      "syncPlaylists": TDV.Tour.Script.syncPlaylists,
      "getComponentsByTags": TDV.Tour.Script.getComponentsByTags,
      "pauseGlobalAudios": TDV.Tour.Script.pauseGlobalAudios,
      "clone": TDV.Tour.Script.clone,
      "fixTogglePlayPauseButton": TDV.Tour.Script.fixTogglePlayPauseButton,
      "restartTourWithoutInteraction": TDV.Tour.Script.restartTourWithoutInteraction,
      "existsKey": TDV.Tour.Script.existsKey,
      "stopMeasurement": TDV.Tour.Script.stopMeasurement,
      "downloadFile": TDV.Tour.Script.downloadFile,
      "mixObject": TDV.Tour.Script.mixObject,
      "cloneBindings": TDV.Tour.Script.cloneBindings,
      "getGlobalAudio": TDV.Tour.Script.getGlobalAudio,
      "copyObjRecursively": TDV.Tour.Script.copyObjRecursively,
      "changeBackgroundWhilePlay": TDV.Tour.Script.changeBackgroundWhilePlay,
      "playGlobalAudioWhilePlay": TDV.Tour.Script.playGlobalAudioWhilePlay,
      "getFirstPlayListWithMedia": TDV.Tour.Script.getFirstPlayListWithMedia,
      "historyGoBack": TDV.Tour.Script.historyGoBack,
      "visibleComponentsIfPlayerFlagEnabled": TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,
      "startMeasurement": TDV.Tour.Script.startMeasurement,
      "getPlayListItems": TDV.Tour.Script.getPlayListItems,
      "autotriggerAtStart": TDV.Tour.Script.autotriggerAtStart,
      "setObjectsVisibilityByTags": TDV.Tour.Script.setObjectsVisibilityByTags,
      "pauseCurrentPlayers": TDV.Tour.Script.pauseCurrentPlayers,
      "getMediaByTags": TDV.Tour.Script.getMediaByTags,
      "playGlobalAudioWhilePlayActiveMedia": TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,
      "startPanoramaWithCamera": TDV.Tour.Script.startPanoramaWithCamera,
      "setMapLocation": TDV.Tour.Script.setMapLocation,
      "setObjectsVisibility": TDV.Tour.Script.setObjectsVisibility,
      "getStateTextToSpeech": TDV.Tour.Script.getStateTextToSpeech,
      "pauseGlobalAudio": TDV.Tour.Script.pauseGlobalAudio,
      "quizSetItemFound": TDV.Tour.Script.quizSetItemFound,
      "stopTextToSpeech": TDV.Tour.Script.stopTextToSpeech,
      "stopAndGoCamera": TDV.Tour.Script.stopAndGoCamera,
      "openEmbeddedPDF": TDV.Tour.Script.openEmbeddedPDF,
      "getPlayListItemIndexByMedia": TDV.Tour.Script.getPlayListItemIndexByMedia,
      "setEndToItemIndex": TDV.Tour.Script.setEndToItemIndex,
      "executeJS": TDV.Tour.Script.executeJS,
      "loadFromCurrentMediaPlayList": TDV.Tour.Script.loadFromCurrentMediaPlayList,
      "htmlToPlainText": TDV.Tour.Script.htmlToPlainText,
      "quizResumeTimer": TDV.Tour.Script.quizResumeTimer,
      "setPanoramaCameraWithSpot": TDV.Tour.Script.setPanoramaCameraWithSpot,
      "setObjectsVisibilityByID": TDV.Tour.Script.setObjectsVisibilityByID,
      "toggleMeasurementsVisibility": TDV.Tour.Script.toggleMeasurementsVisibility,
      "showComponentsWhileMouseOver": TDV.Tour.Script.showComponentsWhileMouseOver,
      "setStartTimeVideoSync": TDV.Tour.Script.setStartTimeVideoSync,
      "executeFunctionWhenChange": TDV.Tour.Script.executeFunctionWhenChange,
      "resumeGlobalAudios": TDV.Tour.Script.resumeGlobalAudios,
      "quizShowQuestion": TDV.Tour.Script.quizShowQuestion,
      "setValue": TDV.Tour.Script.setValue,
      "pauseGlobalAudiosWhilePlayItem": TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,
      "setPlayListSelectedIndex": TDV.Tour.Script.setPlayListSelectedIndex,
      "toggleMeasurement": TDV.Tour.Script.toggleMeasurement,
      "textToSpeech": TDV.Tour.Script.textToSpeech,
      "stopGlobalAudios": TDV.Tour.Script.stopGlobalAudios,
      "resumePlayers": TDV.Tour.Script.resumePlayers,
      "showPopupPanoramaOverlay": TDV.Tour.Script.showPopupPanoramaOverlay,
      "getActivePlayersWithViewer": TDV.Tour.Script.getActivePlayersWithViewer,
      "historyGoForward": TDV.Tour.Script.historyGoForward,
      "toggleTextToSpeechComponent": TDV.Tour.Script.toggleTextToSpeechComponent,
      "setMeasurementUnits": TDV.Tour.Script.setMeasurementUnits,
      "cleanSelectedMeasurements": TDV.Tour.Script.cleanSelectedMeasurements,
      "_initTwinsViewer": TDV.Tour.Script._initTwinsViewer,
      "keepCompVisible": TDV.Tour.Script.keepCompVisible,
      "initAnalytics": TDV.Tour.Script.initAnalytics,
      "setMeasurementsVisibility": TDV.Tour.Script.setMeasurementsVisibility,
      "openLink": TDV.Tour.Script.openLink,
      "setMediaBehaviour": TDV.Tour.Script.setMediaBehaviour,
      "isCardboardViewMode": TDV.Tour.Script.isCardboardViewMode,
      "initOverlayGroupRotationOnClick": TDV.Tour.Script.initOverlayGroupRotationOnClick,
      "quizFinish": TDV.Tour.Script.quizFinish,
      "startModel3DWithCameraSpot": TDV.Tour.Script.startModel3DWithCameraSpot,
      "takeScreenshot": TDV.Tour.Script.takeScreenshot,
      "getPlayListItemByMedia": TDV.Tour.Script.getPlayListItemByMedia,
      "setCameraSameSpotAsMedia": TDV.Tour.Script.setCameraSameSpotAsMedia,
      "_initSplitViewer": TDV.Tour.Script._initSplitViewer,
      "setOverlayBehaviour": TDV.Tour.Script.setOverlayBehaviour,
      "getComponentByName": TDV.Tour.Script.getComponentByName,
      "triggerOverlay": TDV.Tour.Script.triggerOverlay,
      "getPlayListsWithMedia": TDV.Tour.Script.getPlayListsWithMedia,
      "getPixels": TDV.Tour.Script.getPixels,
      "showWindow": TDV.Tour.Script.showWindow,
      "updateVideoCues": TDV.Tour.Script.updateVideoCues,
      "showPopupImage": TDV.Tour.Script.showPopupImage,
      "_initItemWithComps": TDV.Tour.Script._initItemWithComps,
      "executeAudioActionByTags": TDV.Tour.Script.executeAudioActionByTags,
      "changeOpacityWhilePlay": TDV.Tour.Script.changeOpacityWhilePlay,
      "getRootOverlay": TDV.Tour.Script.getRootOverlay,
      "quizStart": TDV.Tour.Script.quizStart
    },
    "height": "100%",
    "layout": "absolute",
    "gap": 10,
    "scrollBarColor": "#000000",
    "scrollBarMargin": 2,
    "defaultMenu": ["fullscreen", "mute", "rotation"],
    "hash": "e5accc2404bafd7536d1052384389c32e8013a3214c4000b645fa3f555442df8",
    "definitions": [
	
	
	{
      "id": "panorama_4F1D9BD9_4313_4182_4179_5383D4736144_camera",
      "class": "PanoramaCamera",
      "enterPointingToHorizon": true,
      "initialPosition": {
        "class": "PanoramaCameraPosition",
        "yaw": -61.8,
        "pitch": -3.51
      }
    }, 
	
	
	
	{
      "id": "panorama_49CF1F6B_4313_4286_41C2_D85156FD4875",
      "label": trans('panorama_49CF1F6B_4313_4286_41C2_D85156FD4875.label'),
      "overlays": ["this.overlay_4D9776ED_4315_C382_41C7_1417ED10B32A", "this.overlay_4C84B090_4317_7F81_41CD_6F56B186E88F"],
      "data": {
        "label": "p2"
      },
      "hfovMin": "150%",
      "vfov": 180,
      "frames": [{
        "class": "CubicPanoramaFrame",
        "thumbnailUrl": "media/panorama_49CF1F6B_4313_4286_41C2_D85156FD4875_t.jpg",
        "cube": {
          "levels": [{
            "height": 1024,
            "rowCount": 2,
            "class": "TiledImageResourceLevel",
            "url": "media/panorama_49CF1F6B_4313_4286_41C2_D85156FD4875_0/{face}/0/{row}_{column}.jpg",
            "colCount": 12,
            "width": 6144,
            "tags": "ondemand"
          }],
          "class": "ImageResource"
        }
      }],
      "hfov": 360,
      "thumbnailUrl": "media/panorama_49CF1F6B_4313_4286_41C2_D85156FD4875_t.jpg",
      "hfovMax": 130,
      "class": "Panorama",
      "adjacentPanoramas": [{
        "select": "this.overlay_4C84B090_4317_7F81_41CD_6F56B186E88F.get('areas').forEach(function(a){ a.trigger('click') })",
        "class": "AdjacentPanorama",
        "distance": 54.49,
        "yaw": -173.27,
        "data": {
          "overlayID": "overlay_4C84B090_4317_7F81_41CD_6F56B186E88F"
        },
        "panorama": "this.panorama_4F1D9BD9_4313_4182_4179_5383D4736144"
      }, {
        "select": "this.overlay_4D9776ED_4315_C382_41C7_1417ED10B32A.get('areas').forEach(function(a){ a.trigger('click') })",
        "class": "AdjacentPanorama",
        "distance": 100,
        "yaw": 26.44,
        "data": {
          "overlayID": "overlay_4D9776ED_4315_C382_41C7_1417ED10B32A"
        },
        "panorama": "this.panorama_49C4B144_4313_7E81_41C0_211B1D18F81B"
      }]
    }, {
      "id": "mainPlayList",
      "class": "PlayList",
      "items": ["this.PanoramaPlayListItem_53A893B6_44CA_838E_41D0_1A85E00A4EBC", "this.PanoramaPlayListItem_53A8C3B5_44CA_8382_41C8_DC43D4EB2A91", "this.PanoramaPlayListItem_53A8E3B5_44CA_8382_41B3_C0E7065D53BA"]
    }, 
	
	
	{
      "id": "panorama_49CF1F6B_4313_4286_41C2_D85156FD4875_camera",
      "class": "PanoramaCamera",
      "initialSequence": "this.sequence_49E0333B_4313_4287_41C9_BDFA47A22FB0",
      "enterPointingToHorizon": true,
      "initialPosition": {
        "class": "PanoramaCameraPosition",
        "yaw": 0,
        "pitch": 0
      }
    },



	{
      "id": "panorama_4F1D9BD9_4313_4182_4179_5383D4736144",
      "label": trans('panorama_4F1D9BD9_4313_4182_4179_5383D4736144.label'),
      "overlays": ["this.overlay_4EA5310E_4315_5E9E_41D0_A7398F6B2E7E", "this.overlay_4B3CCE7E_444B_857A_41CA_F8B6F8305184"],
      "data": {
        "label": "p1"
      },
      "hfovMin": "150%",
      "vfov": 180,
      "frames": [{
        "class": "CubicPanoramaFrame",
        "thumbnailUrl": "media/panorama_4F1D9BD9_4313_4182_4179_5383D4736144_t.jpg",
        "cube": {
          "levels": [{
            "height": 1024,
            "rowCount": 2,
            "class": "TiledImageResourceLevel",
            "url": "media/panorama_4F1D9BD9_4313_4182_4179_5383D4736144_0/{face}/0/{row}_{column}.jpg",
            "colCount": 12,
            "width": 6144,
            "tags": "ondemand"
          }],
          "class": "ImageResource"
        }
      }],
      "hfov": 360,
      "thumbnailUrl": "media/panorama_4F1D9BD9_4313_4182_4179_5383D4736144_t.jpg",
      "hfovMax": 130,
      "class": "Panorama",
      "adjacentPanoramas": [{
        "select": "this.overlay_4EA5310E_4315_5E9E_41D0_A7398F6B2E7E.get('areas').forEach(function(a){ a.trigger('click') })",
        "class": "AdjacentPanorama",
        "distance": 100,
        "yaw": -36.16,
        "data": {
          "overlayID": "overlay_4EA5310E_4315_5E9E_41D0_A7398F6B2E7E"
        },
        "panorama": "this.panorama_49CF1F6B_4313_4286_41C2_D85156FD4875"
      }]
    },



	{
      "id": "panorama_49C4B144_4313_7E81_41C0_211B1D18F81B_camera",
      "class": "PanoramaCamera",
      "initialSequence": "this.sequence_49E0633B_4313_4287_41C7_531EBFFFC25A",
      "enterPointingToHorizon": true,
      "initialPosition": {
        "class": "PanoramaCameraPosition",
        "yaw": 0,
        "pitch": 0
      }
    }, {
      "id": "panorama_49C4B144_4313_7E81_41C0_211B1D18F81B",
      "label": trans('panorama_49C4B144_4313_7E81_41C0_211B1D18F81B.label'),
      "overlays": ["this.overlay_4D8134F8_4315_4781_41CC_892BEE504FD3"],
      "data": {
        "label": "p3"
      },
      "hfovMin": "150%",
      "vfov": 180,
      "frames": [{
        "class": "CubicPanoramaFrame",
        "thumbnailUrl": "media/panorama_49C4B144_4313_7E81_41C0_211B1D18F81B_t.jpg",
        "cube": {
          "levels": [{
            "height": 1024,
            "rowCount": 2,
            "class": "TiledImageResourceLevel",
            "url": "media/panorama_49C4B144_4313_7E81_41C0_211B1D18F81B_0/{face}/0/{row}_{column}.jpg",
            "colCount": 12,
            "width": 6144,
            "tags": "ondemand"
          }],
          "class": "ImageResource"
        }
      }],
      "hfov": 360,
      "thumbnailUrl": "media/panorama_49C4B144_4313_7E81_41C0_211B1D18F81B_t.jpg",
      "hfovMax": 130,
      "class": "Panorama",
      "adjacentPanoramas": [{
        "select": "this.overlay_4D8134F8_4315_4781_41CC_892BEE504FD3.get('areas').forEach(function(a){ a.trigger('click') })",
        "class": "AdjacentPanorama",
        "distance": 12.46,
        "yaw": -158.83,
        "data": {
          "overlayID": "overlay_4D8134F8_4315_4781_41CC_892BEE504FD3"
        },
        "panorama": "this.panorama_49CF1F6B_4313_4286_41C2_D85156FD4875"
      }]
    }, {
      "id": "MainViewerPanoramaPlayer",
      "viewerArea": "this.MainViewer",
      "aaEnabled": true,
      "mouseControlMode": "drag_rotation",
      "class": "PanoramaPlayer",
      "displayPlaybackBar": true,
      "touchControlMode": "drag_rotation",
      "arrowKeysAction": "translate"
    }, {
      "id": "MainViewer",
      "class": "ViewerArea",
      "subtitlesFontFamily": "Arial",
      "toolTipPaddingTop": 4,
      "progressOpacity": 0.7,
      "playbackBarBackgroundOpacity": 1,
      "progressBarBorderRadius": 2,
      "playbackBarProgressBackgroundColor": ["#3399FF"],
      "vrPointerColor": "#FFFFFF",
      "playbackBarProgressBorderRadius": 0,
      "playbackBarHeadShadowOpacity": 0.7,
      "progressBarBackgroundColorDirection": "horizontal",
      "toolTipBorderColor": "#767676",
      "progressBarBorderSize": 0,
      "progressBarBorderColor": "#000000",
      "progressBarBackgroundColorRatios": [0],
      "subtitlesTextShadowOpacity": 1,
      "subtitlesGap": 0,
      "playbackBarProgressBackgroundColorRatios": [0],
      "playbackBarBorderColor": "#FFFFFF",
      "data": {
        "name": "Main Viewer"
      },
      "playbackBarBorderRadius": 0,
      "subtitlesBackgroundColor": "#000000",
      "toolTipShadowColor": "#333138",
      "progressBorderColor": "#000000",
      "toolTipFontFamily": "Arial",
      "playbackBarProgressBorderColor": "#000000",
      "height": "100%",
      "progressBarBackgroundColor": ["#3399FF"],
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipFontColor": "#606060",
      "subtitlesBottom": 50,
      "playbackBarHeadBorderRadius": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadShadowBlurRadius": 3,
      "subtitlesFontColor": "#FFFFFF",
      "subtitlesFontSize": "3vmin",
      "vrThumbstickRotationStep": 20,
      "subtitlesBackgroundOpacity": 0.2,
      "vrPointerSelectionTime": 2000,
      "minHeight": 50,
      "vrPointerSelectionColor": "#FF6600",
      "progressBackgroundColor": ["#000000"],
      "playbackBarBorderSize": 0,
      "playbackBarLeft": 0,
      "surfaceReticleColor": "#FFFFFF",
      "playbackBarHeadHeight": 15,
      "toolTipPaddingLeft": 6,
      "minWidth": 100,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingBottom": 4,
      "playbackBarHeadShadow": true,
      "playbackBarHeadBorderSize": 0,
      "toolTipPaddingRight": 6,
      "playbackBarHeadBackgroundColorRatios": [0, 1],
      "init": "try{eval('/** * v2 * JavaScript Library and Documentation for 3DVista made by Matej Murin * Version: 0.3 * * License: * The source code and all works related to the source code (e.g., documentation) are licensed under a non-sublicensable, non-exclusive, worldwide license to a specific user and are subject to the payment of appropriate fees. Any breach of this license, including unauthorized distribution or the sale of a product containing the library code, may result in the termination of the license. Termination, in such cases, may lead to legal action, encompassing, but not limited to, seeking damages and injunctive relief. * * Copyright 2024 blaze IT s. r. o.. All rights reserved. * * Created by Matej Murin * matej@blazeit.sk * * Powered by blaze IT * https://blazeit.sk */window.blazeIT = {  blaze: (it) => it(this),};(()=>{\"use strict\";var __webpack_modules__={602:(e,t,r)=>{function a(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}r.d(t,{E_:()=>n,CT:()=>o,A5:()=>i,$C:()=>s,hE:()=>l,w7:()=>c,VR:()=>u});var n={click:\"click\",mouseEnter:\"mouseEnter\",mouseLeave:\"mouseLeave\",rollOut:\"rollOut\",rollOver:\"rollOver\",show:\"show\",hide:\"hide\"},o=[n.click,n.rollOut,n.rollOver,n.show,n.hide],i=[\"and\",\"or\"],s=(a(r={UIComponent:\"UIComponent\",Container:\"Container\",WebFrame:\"WebFrame\",Label:\"Label\",HTMLText:\"HTMLText\",Image:\"Image\",Button:\"Button\",IconButton:\"IconButton\",CloseButton:\"CloseButton\",ProgressBar:\"ProgressBar\",TabPanel:\"TabPanel\",DropDown:\"DropDown\",ThumbnailList:\"ThumbnailList\",Panorama:\"Panorama\",LivePanorama:\"LivePanorama\",HDRPanorama:\"HDRPanorama\",Video:\"Video\",Video360:\"Video360\",Model3D:\"Model3D\",PhotoAlbum:\"PhotoAlbum\",Map:\"Map\",MediaAudio:\"MediaAudio\",HotspotPanoramaOverlay:\"HotspotPanoramaOverlay\",FlatHotspotPanoramaOverlay:\"FlatHotspotPanoramaOverlay\",AreaHotspotMapOverlay:\"AreaHotspotMapOverlay\",SpriteModel3DObject:\"SpriteModel3DObject\",FramePanoramaOverlay:\"FramePanoramaOverlay\",QuadFramePanoramaOverlay:\"QuadFramePanoramaOverlay\",VideoPanoramaOverlay:\"VideoPanoramaOverlay\",QuadVideoPanoramaOverlay:\"QuadVideoPanoramaOverlay\",CeilingCapPanoramaOverlay:\"CeilingCapPanoramaOverlay\",TripodCapPanoramaOverlay:\"TripodCapPanoramaOverlay\",PanoramaPlayListItem:\"PanoramaPlayListItem\",LivePanoramaPlayListItem:\"LivePanoramaPlayListItem\",HDRPanoramaPlayListItem:\"HDRPanoramaPlayListItem\",VideoPlayListItem:\"VideoPlayListItem\",Video360PlayListItem:\"Video360PlayListItem\",Model3DPlayListItem:\"Model3DPlayListItem\",PhotoAlbumPlayListItem:\"PhotoAlbumPlayListItem\"},\"HotspotPanoramaOverlay\",\"HotspotPanoramaOverlay\"),a(r,\"QuadVideoPanoramaOverlay\",\"QuadVideoPanoramaOverlay\"),a(r,\"FramePanoramaOverlay\",\"FramePanoramaOverlay\"),a(r,\"AreaHotspotMapOverlay\",\"AreaHotspotMapOverlay\"),a(r,\"SpriteModel3DObject\",\"SpriteModel3DObject\"),a(r,\"InnerModel3DObject\",\"InnerModel3DObject\"),r),l=(a(t={},s.Panorama,s.Panorama),a(t,s.LivePanorama,s.LivePanorama),a(t,s.HDRPanorama,s.HDRPanorama),a(t,s.Video,s.Video),a(t,s.Video360,s.Video360),a(t,s.Model3D,s.Model3D),a(t,s.PhotoAlbum,s.PhotoAlbum),a(t,s.Map,s.Map),a(t,s.MediaAudio,s.MediaAudio),t),c=(a(r={},s.HotspotPanoramaOverlay,s.HotspotPanoramaOverlay),a(r,s.FlatHotspotPanoramaOverlay,s.FlatHotspotPanoramaOverlay),a(r,s.AreaHotspotMapOverlay,s.AreaHotspotMapOverlay),a(r,s.SpriteModel3DObject,s.SpriteModel3DObject),a(r,s.FramePanoramaOverlay,s.FramePanoramaOverlay),a(r,s.QuadFramePanoramaOverlay,s.QuadFramePanoramaOverlay),a(r,s.VideoPanoramaOverlay,s.VideoPanoramaOverlay),a(r,s.QuadVideoPanoramaOverlay,s.QuadVideoPanoramaOverlay),r),u=(a(t={},s.Container,s.Container),a(t,s.WebFrame,s.WebFrame),a(t,s.Label,s.Label),a(t,s.HTMLText,s.HTMLText),a(t,s.Image,s.Image),a(t,s.Button,s.Button),a(t,s.IconButton,s.IconButton),a(t,s.CloseButton,s.CloseButton),a(t,s.ProgressBar,s.ProgressBar),a(t,s.TabPanel,s.TabPanel),a(t,s.DropDown,s.DropDown),a(t,s.ThumbnailList,s.ThumbnailList),t)},202:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>triggerComponent});var _misc_enums__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(602);function triggerComponent(component,eventType){var _this=this;try{if(!component||!Object.keys(_misc_enums__WEBPACK_IMPORTED_MODULE_0__.VR).includes(component.get(\"class\"))||!component.getBindings)throw Error(\"Invalid input.\");var _eventType=eventType||_misc_enums__WEBPACK_IMPORTED_MODULE_0__.E_.click,bindings;if(_misc_enums__WEBPACK_IMPORTED_MODULE_0__.CT.includes(_eventType))return bindings=component.getBindings(_eventType),!(!Array.isArray(bindings)||0===bindings.length||(bindings.forEach(function(binding){var executeBinding;\"string\"==typeof binding&&(executeBinding=function executeBinding(ctx){return function(){return eval(binding)}.call(ctx)},executeBinding(_this.ctx))}),0));throw Error(\\'Invalid event type \"\\'.concat(_eventType,\\'\".\\'))}catch(error){return _this.logger.error(\\'Error in \"triggerComponent\":\\',error.message),null}}}},__webpack_module_cache__={};function __webpack_require__(e){var t;return(__webpack_module_cache__[e]||(t=__webpack_module_cache__[e]={exports:{}},__webpack_modules__[e](t,t.exports,__webpack_require__),t)).exports}__webpack_require__.d=(e,t)=>{for(var r in t)__webpack_require__.o(t,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var s=__webpack_require__(602);function n(e,t,a){return Array.isArray(t)&&0!==t.length&&(void 0===a||s.A5.includes(a))?e.filter(function(e){var r=(null==(e=e.get(\"data\"))?void 0:e.tags)||[];return void 0===a||\"and\"===a?t.reduce(function(e,t){return e&&r.includes(t)},!0):\"or\"===a&&t.reduce(function(e,t){return e||r.includes(t)},!1)}):null}function o(e){return(o=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}function l(e){return(l=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}var i=__webpack_require__(202);function c(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,\"value\"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var e=function(){function r(){if(!(this instanceof r))throw new TypeError(\"Cannot call a class as a function\");this.debug=!1,this.tempDebug=\"#freekarlo\",window.blazeIT.blaze(this.innit.bind(this))}var e,t,a;return e=r,(t=[{key:\"innit\",value:function(e){this.debug,this.ctx=e;var t={getAllComponents:function(){return this.getByClassName(s.$C.UIComponent).filter(function(e){return\"rootPlayer\"!==e.get(\"id\")})}.bind(this),getComponentByName:function(e){try{if(!e||\"string\"!=typeof e)throw Error(\"Invalid input.\");var t=this.ctx.getComponentByName(e);if(t)return t;this.logger.error(\\'Component called \"\\'.concat(e,\\'\" was not found.\\'))}catch(e){return this.logger.error(\\'Error in \"getComponentByName\":\\',e.message),null}}.bind(this),getComponentsByName:function(t){try{if(t&&\"string\"==typeof t)return this.getAllComponents().filter(function(e){return(null==(e=e.get(\"data\"))?void 0:e.name)===t});throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"getComponentsByName\":\\',e.message),null}}.bind(this),getComponentsByTags:function(e,t){return n(this.getAllComponents(),e,t)}.bind(this),getAllMedias:function(){var a=this;return Object.keys(s.hE).reduce(function(e,t){var r=a.getByClassName(t).filter(function(e){return e.get(\"class\")===t});return e=e.concat(r)},[])}.bind(this),getActiveMedia:function(){var e=this.ctx.MainViewer||this.ctx.MainViewer_mobile||this.ctx.MainViewer_vr;return e?this.ctx.getActiveMediaWithViewer(e):null}.bind(this),getMediaByName:function(t){try{if(!t||\"string\"!=typeof t)throw Error(\"Invalid input.\");var e=this.getAllMedias().find(function(e){return(null==(e=e.get(\"data\"))?void 0:e.label)===t});if(e)return e;this.logger.error(\\'Media called \"\\'.concat(t,\\'\" was not found.\\'))}catch(e){return this.logger.error(\\'Error in \"getMediaByName\":\\',e.message),null}}.bind(this),getMediasByTags:function(e,t){return n(this.getAllMedias(),e,t)}.bind(this),getMediaHotspots:function(e){try{if(!e||!e.get||!e.get(\"class\"))throw Error(\"Invalid input.\");switch(e.get(\"class\")){case s.$C.HDRPanorama:case s.$C.LivePanorama:case s.$C.Panorama:case s.$C.Video360:case s.$C.Map:return(e.get(\"overlays\")||[]).filter(function(e){return!(null==(e=e.get(\"data\"))||!e.label)});case s.$C.Model3D:return(e.get(\"objects\")||[]).filter(function(e){return e.get(\"class\")===s.$C.SpriteModel3DObject})}return[]}catch(e){return _this.logger.error(\\'Error in \"getMediaHotspots\":\\',e.message),null}}.bind(this),playAudio:function(e,t){var r;try{if(e&&e.get&&e.get(\"class\")===s.hE.MediaAudio)return r=Object.assign({playOnlyOnCurrentMedia:!0,stopGlobalMusic:!1},t||{}),this.ctx.executeAudioAction([e],\"play\",!0===r.playOnlyOnCurrentMedia||null,!0===r.playOnlyOnCurrentMedia,!0===r.stopGlobalMusic,!1),!0;throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"playAudio\":\\',e.message),!1}}.bind(this),pauseAudio:function(e){try{if(e&&e.get&&e.get(\"class\")===s.hE.MediaAudio)return this.ctx.executeAudioAction([e],\"pause\"),!0;throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"pauseAudio\":\\',e.message),!1}}.bind(this),stopAudio:function(e){try{if(e&&e.get&&e.get(\"class\")===s.hE.MediaAudio)return this.ctx.executeAudioAction([e],\"stop\"),!0;throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"stopAudio\":\\',e.message),!1}}.bind(this),getAll3DModelObjects:function(e){try{if(e&&e.get(\"class\")===s.$C.Model3D)return e.get(\"objects\").filter(function(e){return e.get(\"class\")===s.$C.InnerModel3DObject});throw Error(\"Passed 3D Model is invalid.\")}catch(e){return this.logger.error(\\'Error in \"getAll3DModelObjects\":\\',e.message),null}}.bind(this),get3DModelObjectByName:function(e,t){try{if(!e||e.get(\"class\")!==s.$C.Model3D)throw Error(\"Passed 3D Model is invalid.\");if(!t||\"string\"!=typeof t)throw Error(\"objectName is not a string.\");var r=this.getAll3DModelObjects(e);if(r&&Array.isArray(r))return r.find(function(e){return e.get(\"data\").label===t});throw Error(\"Objects are invalid.\")}catch(e){return this.logger.error(\\'Error in \"get3DModelObjectByName\":\\',e.message),null}}.bind(this),get3DModelObjectsByTags:function(e,t,r){try{if(!e||e.get(\"class\")!==s.$C.Model3D)throw Error(\"Passed 3D Model is invalid.\");var a=this.getAll3DModelObjects(e);if(a&&Array.isArray(a))return n(a,t,r);throw Error(\"Objects are invalid.\")}catch(e){return this.logger.error(\\'Error in \"get3DModelObjectsByTags\":\\',e.message),null}}.bind(this),getAllHotspots:function(){var r=this;return Object.keys(s.w7).reduce(function(e,t){return e=e.concat(r.getByClassName(t))},[])}.bind(this),getHotspotByName:function(t){try{if(!t||\"string\"!=typeof t)throw Error(\"Invalid input.\");var e=this.getAllHotspots().find(function(e){return(null==(e=e.get(\"data\"))?void 0:e.label)===t});if(e)return e;this.logger.error(\\'Hotspot called \"\\'.concat(t,\\'\" was not found.\\'))}catch(e){return this.logger.error(\\'Error in \"getHotspotByName\":\\',e.message),null}}.bind(this),getHotspotsByName:function(t){return this.getAllHotspots().filter(function(e){return(null==(e=e.get(\"data\"))?void 0:e.label)===t})}.bind(this),getHotspotsByParentClasses:function(e){var r=this;try{if(e&&Array.isArray(e))return e.reduce(function(t,e){if(\"string\"==typeof e)switch(e){case s.$C.HDRPanorama:case s.$C.LivePanorama:case s.$C.Panorama:case s.$C.Video360:case s.$C.Map:r.getByClassName(e).forEach(function(e){e=r.getMediaHotspots(e);t=t.concat(e||[])});break;case s.$C.Model3D:t=t.concat(r.getByClassName(s.$C.SpriteModel3DObject)||[])}return t},[]);throw Error(\"Invalid input.\")}catch(e){return r.logger.error(\\'Error in \"getHotspotsByParentClasses\":\\',e.message),null}}.bind(this),getHotspotsByTags:function(e,t){return n(this.getAllHotspots(),e,t)}.bind(this),getHotspotNestedProperty:function(e,t){try{if(!e||!e.get||!Object.keys(s.w7).includes(e.get(\"class\")))throw Error(\"Invalid Hotspot.\");if(t&&\"string\"==typeof t)return(e.get(\"class\")!==s.w7.HotspotPanoramaOverlay?e:e.get(\"items\")[0]).get(t);throw Error(\"Invalid property.\")}catch(e){return this.logger.error(\\'Error in \"getHotspotNestedProperty\":\\',e.message),!1}}.bind(this),setHotspotNestedProperty:function(e,t,r){try{if(!e||!e.get||!Object.keys(s.w7).includes(e.get(\"class\")))throw Error(\"Invalid Hotspot.\");if(t&&\"string\"==typeof t)return e.get(\"class\")===s.w7.HotspotPanoramaOverlay&&e.get(\"items\").forEach(function(e){e.set(t,r)}),e.set(t,r),!0;throw Error(\"Invalid property.\")}catch(e){return this.logger.error(\\'Error in \"setHotspotNestedProperty\":\\',e.message),!1}}.bind(this),setHotspotImageUrl:function(e,t){try{if(!e||!e.get||!Object.keys(s.w7).includes(e.get(\"class\")))throw Error(\"Invalid Hotspot.\");if(!t||\"string\"!=typeof t)throw Error(\"Invalid imageUrl.\");switch(e.get(\"class\")){case s.w7.HotspotPanoramaOverlay:case s.w7.FlatHotspotPanoramaOverlay:e.get(\"items\").forEach(function(e){e.get(\"image\").get(\"levels\").forEach(function(e){e.set(\"url\",t)})});break;case s.w7.SpriteModel3DObject:item.get(\"image\").get(\"levels\").forEach(function(e){e.set(\"url\",t)});break;default:return!1}return!0}catch(e){return this.logger.error(\\'Error in \"setHotspotImageUrl\":\\',e.message),!1}}.bind(this),getAllPlayListItems:function(){return this.ctx.mainPlayList.get(\"items\")}.bind(this),getPlayListItemByMediaName:function(t){try{if(!t||\"string\"!=typeof t)throw Error(\"Invalid input.\");var e=this.getAllPlayListItems(),r=e.findIndex(function(e){return(null==(e=e.get(\"media\"))||null==(e=e.get(\"data\"))?void 0:e.label)===t});if(-1!==r)return e[r];this.logger.error(\\'Media called \"\\'.concat(t,\\'\" was not found in the playlist.\\'))}catch(e){return this.logger.error(\\'Error in \"getPlayListItemByMediaName\":\\',e.message),null}}.bind(this),getActivePlayListItem:function(){if(-1!==this.ctx.mainPlayList.selectedIndex)return this.getAllPlayListItems()[this.ctx.mainPlayList.selectedIndex]}.bind(this),getActivePlayListItemIndex:function(){return this.ctx.mainPlayList.selectedIndex}.bind(this),getPreviousPlayListItem:function(){var e,t=this.ctx.mainPlayList.selectedIndex;if(-1!==t)return e=this.getAllPlayListItems(),0===t?e[e.length-1]:e[t-1]}.bind(this),getNextPlayListItem:function(){var e,t=this.ctx.mainPlayList.selectedIndex;if(-1!==t)return t===(e=this.getAllPlayListItems()).length-1?e[0]:e[t+1]}.bind(this),openMedia:function(e){var t,r=this;try{if(!(e&&\"object\"===o(e)&&e.get&&null!=(t=e.get(\"data\"))&&t.label&&Object.keys(s.hE).includes(e.get(\"class\"))))throw Error(\"Invalid input.\");if([s.$C.Map,s.$C.MediaAudio].includes(e.get(\"class\")))return!1;r.turnOnSilent();var a=r.getPlayListItemByMediaName(e.get(\"data\").label);if(r.turnOffSilent(),a)return r.openPlayListItem(a);var n=r.ctx.getPlayListsWithMedia(e);if(0===n.length)throw Error(\\'No players found for media \"\\'.concat(e.get(\"data\").label,\\'\".\\'));if(1<n.length)throw Error(\\'Unexpected number of players found for media \"\\'.concat(e.get(\"data\").label,\\'\".\\'));switch(r.ctx.setMediaBehaviour(n[0],0,null,!0),e.get(\"class\")){case s.$C.Video360:e.get(\"autoplay\")&&r.ctx.MainViewerPanoramaPlayer&&r.ctx.MainViewerPanoramaPlayer.play();break;case s.$C.Video:e.get(\"autoplay\")&&r.ctx.MainViewerVideoPlayer&&r.ctx.MainViewerVideoPlayer.play()}return!0}catch(e){return r.logger.error(\\'Error in \"openMedia\":\\',e.message),!1}}.bind(this),openMediaByName:function(e){var t;try{if(e&&\"string\"==typeof e)return!!(t=this.getMediaByName(e))&&this.openMedia(t);throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"openMediaByName\":\\',e.message),!1}}.bind(this),openPlayListItem:function(t){var e,r,a,n=this;try{if(!t||\"object\"!==l(t)||!t.get||null==(e=t.get(\"media\"))||null==(r=e.get(\"data\"))||!r.label||!0!==(null==(a=t.get(\"class\"))?void 0:a.includes(\"PlayListItem\")))throw Error(\"Invalid input.\");var o=n.getAllPlayListItems().findIndex(function(e){return(null==(e=e.get(\"media\"))||null==(e=e.get(\"data\"))?void 0:e.label)===t.get(\"media\").get(\"data\").label});if(-1===o)return!1;if(o===n.ctx.mainPlayList.selectedIndex)return!1;try{switch(t.get(\"class\")){case s.$C.PanoramaPlayListItem:case s.$C.LivePanoramaPlayListItem:case s.$C.HDRPanoramaPlayListItem:case s.$C.Video360:var i=t.get(\"camera\").get(\"initialPosition\");n.ctx.setPanoramaCameraWithSpot(n.ctx.mainPlayList,t,i.get(\"yaw\")||0,i.get(\"pitch\")||0,i.get(\"hfov\")||110);break;case s.$C.Model3DPlayListItem:n.ctx.setModel3DCameraSpot(n.ctx.mainPlayList,t,function(e){e=e.get(\"camera\");return{distance:e.get(\"initialDistance\"),x:e.get(\"initialX\"),pitch:e.get(\"initialPitch\"),y:e.get(\"initialY\"),yaw:e.get(\"initialYaw\"),fov:e.get(\"initialFov\"),z:e.get(\"initialZ\")}}(t.get(\"media\")),1,\"cubic_in_out\")}}catch(e){}return n.ctx.setPlayListSelectedIndex(n.ctx.mainPlayList,o),!0}catch(e){return n.logger.error(\\'Error in \"openMediaByName\":\\',e.message),!1}}.bind(this),triggerComponent:i.F.bind(this),triggerComponentByName:function(e,t){var r;try{if(e&&\"string\"==typeof e)return!!(r=this.getComponentByName(e))&&this.triggerComponent(r,t);throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"triggerComponentByName\":\\',e.message),null}}.bind(this),triggerHotspot:function(e,t){try{if(!e||!Object.keys(s.w7).includes(e.get(\"class\")))throw Error(\"Invalid input.\");var r=t||s.E_.click;if(s.CT.includes(r))return e.get(\"class\")===s.w7.SpriteModel3DObject?e.trigger(r):this.ctx.triggerOverlay(e,r),!0;throw Error(\\'Invalid event type \"\\'.concat(r,\\'\".\\'))}catch(e){return this.logger.error(\\'Error in \"triggerHotspot\":\\',e.message),null}}.bind(this),triggerHotspotByName:function(e,t){var r;try{if(e&&\"string\"==typeof e)return!!(r=this.getHotspotByName(e))&&this.triggerHotspot(r,t);throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"triggerHotspotByName\":\\',e.message),null}}.bind(this),getByClassName:function(e){try{if(e&&\"string\"==typeof e)return this.ctx.getByClassName(e);throw Error(\"Invalid input.\")}catch(e){return this.logger.error(\\'Error in \"getByClassName\":\\',e.message),null}}.bind(this),turnOnDebug:function(){this.debug=!0}.bind(this)};Object.keys(t).forEach(function(e){r.prototype[e]=t[e],window.blazeIT[e]=r.prototype[e]}),window.blazeIT.variables={},window.blazeIT.functions={}}},{key:\"logger\",get:function(){var t=this;return{log:function(){var e;!0===t.debug&&(e=console.log).call.apply(e,[null].concat([\"[blaze IT v2 logger]\"].concat(Array.prototype.slice.call(arguments))))},error:function(){var e;!0===t.debug&&(e=console.error).call.apply(e,[null].concat([\"[blaze IT v2 logger]\"].concat(Array.prototype.slice.call(arguments))))}}}}])&&c(e.prototype,t),a&&c(e,a),r}();e.prototype.turnOnSilent=function(){this.tempDebug=this.debug,this.debug=!1},e.prototype.turnOffSilent=function(){this.debug=this.tempDebug},new e})()})();')}catch(e){console.log(e)}",
      "progressBottom": 10,
      "progressBorderRadius": 2,
      "width": "100%",
      "playbackBarHeadBackgroundColor": ["#111111", "#666666"],
      "progressRight": "33%",
      "subtitlesTextShadowHorizontalLength": 1,
      "subtitlesBorderColor": "#FFFFFF",
      "propagateClick": false,
      "progressBackgroundColorRatios": [0],
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarBottom": 5,
      "toolTipFontSize": "1.11vmin",
      "subtitlesTop": 0,
      "firstTransitionDuration": 0,
      "playbackBarHeight": 10,
      "playbackBarBackgroundColor": ["#FFFFFF"],
      "progressHeight": 2,
      "subtitlesTextShadowColor": "#000000",
      "progressLeft": "33%",
      "progressBorderSize": 0,
      "doubleClickAction": "none",
      "playbackBarProgressBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "playbackBarBackgroundColorDirection": "vertical",
      "subtitlesTextShadowVerticalLength": 1,
      "playbackBarRight": 0,
      "surfaceReticleSelectionColor": "#FFFFFF"
    }, {
      "id": "overlay_4D9776ED_4315_C382_41C7_1417ED10B32A",
      "maps": [],
      "useHandCursor": true,
      "items": [{
        "distance": 100,
        "hfov": 10.5,
        "pitch": 5.5,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 26.44,
        "vfov": 10.5,
        "data": {
          "label": "H23"
        },
        "image": "this.AnimatedImageResource_539262EE_44CA_FD9E_41C0_57CCBF307946",
        "scaleMode": "fit_inside"
      }],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": ["this.HotspotPanoramaOverlayArea_4D86E6F2_4315_C386_41C3_DA0996BEE87C"],
      "data": {
        "label": "H23"
      }
    }, {
      "id": "overlay_4C84B090_4317_7F81_41CD_6F56B186E88F",
      "maps": [],
      "useHandCursor": true,
      "items": [{
        "distance": 100,
        "hfov": 15.47,
        "pitch": -1.78,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -173.27,
        "vfov": 14.93,
        "data": {
          "label": "H21"
        },
        "image": "this.AnimatedImageResource_539212EE_44CA_FD9E_41C9_B4395A8EABEE",
        "scaleMode": "fit_inside"
      }],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": ["this.HotspotPanoramaOverlayArea_4CD790A5_4317_7F83_41BE_B80245384ED0"],
      "data": {
        "label": "H21",
        "hasPanoramaAction": true
      }
    },


	{
      "id": "PanoramaPlayListItem_53A893B6_44CA_838E_41D0_1A85E00A4EBC",
      "class": "PanoramaPlayListItem",
      "player": "this.MainViewerPanoramaPlayer",
      "camera": "this.panorama_4F1D9BD9_4313_4182_4179_5383D4736144_camera",
      "media": "this.panorama_4F1D9BD9_4313_4182_4179_5383D4736144",
      "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
    },


	{
      "id": "PanoramaPlayListItem_53A8C3B5_44CA_8382_41C8_DC43D4EB2A91",
      "class": "PanoramaPlayListItem",
      "player": "this.MainViewerPanoramaPlayer",
      "camera": "this.panorama_49CF1F6B_4313_4286_41C2_D85156FD4875_camera",
      "media": "this.panorama_49CF1F6B_4313_4286_41C2_D85156FD4875",
      "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
    },


	{
      "id": "PanoramaPlayListItem_53A8E3B5_44CA_8382_41B3_C0E7065D53BA",
      "class": "PanoramaPlayListItem",
      "player": "this.MainViewerPanoramaPlayer",
      "end": "this.trigger('tourEnded')",
      "camera": "this.panorama_49C4B144_4313_7E81_41C0_211B1D18F81B_camera",
      "media": "this.panorama_49C4B144_4313_7E81_41C0_211B1D18F81B",
      "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)"
    }, 
	
	
	{
      "id": "sequence_49E0333B_4313_4287_41C9_BDFA47A22FB0",
      "class": "PanoramaCameraSequence",
      "movements": [{
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
      }, {
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
      }, {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
      }]
    },


	{
      "id": "overlay_4EA5310E_4315_5E9E_41D0_A7398F6B2E7E",
      "maps": [],
      "useHandCursor": true,
      "items": [{
        "distance": 100,
        "hfov": 10.5,
        "pitch": 3.78,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -36.16,
        "vfov": 10.5,
        "data": {
          "label": "H12"
        },
        "image": "this.AnimatedImageResource_5391F2EE_44CA_FD9E_41A3_7810DB57E837",
        "scaleMode": "fit_inside"
      }],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": ["this.HotspotPanoramaOverlayArea_4D0E2149_4315_5E82_41BD_C99BBF60EAD6"],
      "data": {
        "label": "H12"
      }
    }, {
      "id": "overlay_4B3CCE7E_444B_857A_41CA_F8B6F8305184",
      "maps": [],
      "useHandCursor": true,
      "items": [{
        "distance": 100,
        "hfov": 10.5,
        "pitch": 4.3,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -57.83,
        "vfov": 10.5,
        "data": {
          "label": "Circle Generic 03"
        },
        "image": "this.AnimatedImageResource_5391A2EE_44CA_FD9E_41B2_15E4ACC72089",
        "scaleMode": "fit_inside"
      }],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": ["this.HotspotPanoramaOverlayArea_4B9B1EB8_444B_8586_41CC_BEA83411A2FC"],
      "data": {
        "label": "Circle Generic 03"
      }
    }, {
      "id": "sequence_49E0633B_4313_4287_41C7_531EBFFFC25A",
      "class": "PanoramaCameraSequence",
      "movements": [{
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_in",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
      }, {
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
      }, {
        "class": "DistancePanoramaCameraMovement",
        "easing": "cubic_out",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
      }]
    }, {
      "id": "overlay_4D8134F8_4315_4781_41CC_892BEE504FD3",
      "maps": [],
      "useHandCursor": true,
      "items": [{
        "distance": 100,
        "hfov": 16.31,
        "pitch": -7.76,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -158.83,
        "vfov": 15.84,
        "data": {
          "label": "H32"
        },
        "image": "this.AnimatedImageResource_5392C2EE_44CA_FD9E_41C7_C23BE360B4B8",
        "scaleMode": "fit_inside"
      }],
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": ["this.HotspotPanoramaOverlayArea_4DA4C4FE_4315_4781_41CE_6D7A5FBF166E"],
      "data": {
        "label": "H32",
        "hasPanoramaAction": true
      }
    }, {
      "id": "AnimatedImageResource_539262EE_44CA_FD9E_41C0_57CCBF307946",
      "rowCount": 6,
      "frameCount": 24,
      "colCount": 4,
      "class": "AnimatedImageResource",
      "frameDuration": 41,
      "finalFrame": "first",
      "levels": [{
        "height": 714,
        "class": "ImageResourceLevel",
        "url": "media/res_524265B3_4317_4186_41C6_1299E28D2A6D_0.png",
        "width": 476
      }]
    }, {
      "id": "HotspotPanoramaOverlayArea_4D86E6F2_4315_C386_41C3_DA0996BEE87C",
      "class": "HotspotPanoramaOverlayArea",
      "mapColor": "any",
      "displayTooltipInTouchScreens": true,
      "click": "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_53A8E3B5_44CA_8382_41B3_C0E7065D53BA, 13.292307692307691, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2)"
    }, {
      "id": "AnimatedImageResource_539212EE_44CA_FD9E_41C9_B4395A8EABEE",
      "rowCount": 6,
      "frameCount": 24,
      "colCount": 4,
      "class": "AnimatedImageResource",
      "frameDuration": 41,
      "finalFrame": "first",
      "levels": [{
        "height": 714,
        "class": "ImageResourceLevel",
        "url": "media/res_524265B3_4317_4186_41C6_1299E28D2A6D_0.png",
        "width": 476
      }]
    }, {
      "id": "HotspotPanoramaOverlayArea_4CD790A5_4317_7F83_41BE_B80245384ED0",
      "class": "HotspotPanoramaOverlayArea",
      "mapColor": "any",
      "displayTooltipInTouchScreens": true,
      "click": "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_53A893B6_44CA_838E_41D0_1A85E00A4EBC, 121.84615384615384, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)"
    }, {
      "id": "AnimatedImageResource_5391F2EE_44CA_FD9E_41A3_7810DB57E837",
      "rowCount": 6,
      "frameCount": 24,
      "colCount": 4,
      "class": "AnimatedImageResource",
      "frameDuration": 41,
      "finalFrame": "first",
      "levels": [{
        "height": 714,
        "class": "ImageResourceLevel",
        "url": "media/res_524265B3_4317_4186_41C6_1299E28D2A6D_0.png",
        "width": 476
      }]
    }, {
      "id": "HotspotPanoramaOverlayArea_4D0E2149_4315_5E82_41BD_C99BBF60EAD6",
      "class": "HotspotPanoramaOverlayArea",
      "mapColor": "any",
      "displayTooltipInTouchScreens": true,
      "click": "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_53A8C3B5_44CA_8382_41C8_DC43D4EB2A91, 28.8, 0.7731663685152066, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"
    }, {
      "id": "AnimatedImageResource_5391A2EE_44CA_FD9E_41B2_15E4ACC72089",
      "rowCount": 6,
      "frameCount": 24,
      "colCount": 4,
      "class": "AnimatedImageResource",
      "frameDuration": 41,
      "finalFrame": "first",
      "levels": [{
        "height": 474,
        "class": "ImageResourceLevel",
        "url": "media/res_54F8F74C_444A_849D_418E_4BF21642DD7C_0.png",
        "width": 316
      }]
    }, {
      "id": "HotspotPanoramaOverlayArea_4B9B1EB8_444B_8586_41CC_BEA83411A2FC",
      "class": "HotspotPanoramaOverlayArea",
      "displayTooltipInTouchScreens": true,
      "mapColor": "any"
    }, {
      "id": "AnimatedImageResource_5392C2EE_44CA_FD9E_41C7_C23BE360B4B8",
      "rowCount": 6,
      "frameCount": 24,
      "colCount": 4,
      "class": "AnimatedImageResource",
      "frameDuration": 41,
      "finalFrame": "first",
      "levels": [{
        "height": 714,
        "class": "ImageResourceLevel",
        "url": "media/res_524265B3_4317_4186_41C6_1299E28D2A6D_0.png",
        "width": 476
      }]
    }, {
      "id": "HotspotPanoramaOverlayArea_4DA4C4FE_4315_4781_41CE_6D7A5FBF166E",
      "class": "HotspotPanoramaOverlayArea",
      "mapColor": "any",
      "displayTooltipInTouchScreens": true,
      "click": "this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_53A8C3B5_44CA_8382_41C8_DC43D4EB2A91, -180, 0.7731663685152066, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"
    }],
    "class": "Player",
    "minWidth": 0
  };
  if (script['data'] == undefined)
    script['data'] = {};
  script['data']['translateObjs'] = translateObjs;
  script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
  };
  TDV['PlayerAPI']['defineScript'](script);
  //# sourceMappingURL=script_device_v2023.2.12.js.map
})();
//Generated with v2023.2.12, Sat May 4 2024