/**
 * 
 * 
$$$$$$$$\   $$\   $$\   $$\        $$$$$$\ $$$$$$$$\ $$$$$$$$\ $$$$$$$\  $$$$$$$$\  $$$$$$\        $$\    $$\  $$$$$$\  
\__$$  __|$$$$ |  $$$\  $$ |      $$  __$$\\__$$  __|$$  _____|$$  __$$\ $$  _____|$$  __$$\       $$ |   $$ |$$  __$$\ 
   $$ |   \_$$ |  $$$$\ $$ |      $$ /  \__|  $$ |   $$ |      $$ |  $$ |$$ |      $$ /  $$ |      $$ |   $$ |\__/  $$ |
   $$ |     $$ |  $$ $$\$$ |      \$$$$$$\    $$ |   $$$$$\    $$$$$$$  |$$$$$\    $$ |  $$ |      \$$\  $$  | $$$$$$  |
   $$ |     $$ |  $$ \$$$$ |       \____$$\   $$ |   $$  __|   $$  __$$< $$  __|   $$ |  $$ |       \$$\$$  / $$  ____/ 
   $$ |     $$ |  $$ |\$$$ |      $$\   $$ |  $$ |   $$ |      $$ |  $$ |$$ |      $$ |  $$ |        \$$$  /  $$ |      
   $$ |   $$$$$$\ $$ | \$$ |      \$$$$$$  |  $$ |   $$$$$$$$\ $$ |  $$ |$$$$$$$$\  $$$$$$  |         \$  /   $$$$$$$$\ 
   \__|   \______|\__|  \__|       \______/   \__|   \________|\__|  \__|\________| \______/           \_/    \________|

      //best stereo on cord 

 * @name T1NstereoV2
 * @author tinguy1
 * @version 1.1.13
 * @authorLink https://github.com/tinguy1
 * @invite 9bpbS4kjdf
 * @source https://github.com/tinguy1/T1NstereoV2
**/
/*@cc_on @if (@_jscript)
var pluginName = WScript.ScriptName.split(".")[0];
var shell = WScript.CreateObject("WScript.Shell");
shell.Popup(
    "Do NOT run scripts from the internet with the Windows Script Host!\nMove this file to your BetterDiscord plugins folder.",
    0,
    pluginName + ": Warning!",
    0x1030
);
var fso = new ActiveXObject("Scripting.FileSystemObject");
var pluginsPath = shell.expandEnvironmentStrings("%appdata%\\BetterDiscord\\plugins");
if (!fso.FolderExists(pluginsPath)) {
    var popup = shell.Popup(
        "Unable to find BetterDiscord on your computer.\nOpen the download page of BetterDiscord?",
        0,
        pluginName + ": BetterDiscord not found",
        0x34
    );
    if (popup === 6) {
        shell.Exec("explorer \"https://betterdiscord.app\"");
    }
} else if (WScript.ScriptFullName === pluginsPath + "\\" + WScript.ScriptName) {
    shell.Popup(
        "This plugin is already in the correct folder.\nNavigate to the \"Plugins\" settings tab in Discord and enable it there. Have fun! - tinguy1",
        0,
        pluginName,
        0x40
    );
} else {
    var popup = shell.Popup(
        "Open the BetterDiscord plugin folder?",
        0,
        pluginName,
        0x34
    );
    if (popup === 6) {
        shell.Exec("explorer " + pluginsPath);
    }
}
WScript.Quit();
@else @*/
//variables for this code to work//they need to be defined up here or the code gets all fucking buggy and wont work but to make it neat-er i set them as vars to null to then be changed in the replacement section
var samplerate = null //dont touch
var channelmaxbitrate = null //dont touch
var bitrate = null //dont touch
var channelstereoornot = null //dont touch
var pbypass = null //dont touch
var audiopriority = null //dont touch
var audionormal = null //dont touch
var vadkrisp = null //dont touch
var decoderstereo = null //dont touch
var stereostereo = null //dont touch
var videobitrate = null //dont touch
var streambitrate = null //dont touch
var consolelogs = null //dont touch
var vctoast = null //dont touch
var attenuation1 = null //dont touch
var attenuation2 = null //dont touch
var Lic = null //dont touch
var voicee = null //dont touch
var actualvcstat = null //dont touch
var audiopacketsize = null //dont touch
var camfps = null //dont touch
var streamfps = null //dont touch
var sinkquality = null //dont touch
var savsinkqualitystatus = null //dont touch
var autorejoinstatus = null //dont touch
var setvolumemax = null //dont touch
var rejoindelay = null //dont touch
let isRunning = false; // dont touch
module.exports = (() => {
  const config = {
    info: {
      name: 'T1NstereoV2', //dont try to change the name of the plugin or it wont work
      version: '1.1.13',
      description:
        '(You need a valid license to use this plugin) Disable echo cancellation, noise reduction, noise suppression, Diagnostic audio recording, and Debug logging all located in voice and video settings for this plugin to work, open plugin settings to see configurable settings. If you require support click on the question mark under the plugin name to join the support server.',
      authors: [
        {
          name: 'tinguy1'
        }
      ],
      authorlink: 'github.com/tinguy1',
      github: 'github.com/tinguy1',
      github_raw: 'https://raw.githubusercontent.com/tinguy1/T1NstereoV2/main/T1NstereoV2.plugin.js'
    },
    changelog: [
      {
        title: 'V2 1.1.13 release and bug fixes',
        items: [
          'Fixed preset settings, setting names and descriptions for a better user experience',
        ],
      },
      {
        title: 'V2 release and bug fixes',
        items: [
          'made the audio bitrate pre set to max for retards who said it was shitty cause it sounded lower quality, yeah thats why theres settings for audio bitrate?',
          'added info on how to use custom voice bitrate',
          'fixed problem where auto rejoin disapears when server muted',
          'fixed auto rejoin',
          'fixed auto rejoin again ugh, sorry for the plugin update prompts',
          'fixed auto rejoin againnnnnnnnnnnnnnnnnnn',
          'fixed auto rejoin againnnnnnnnnnnnnnfgsdfgsdfgsnnnnn',
          'fixed option for mono output audio',
          'mono output broke as soon as i updated this plugin lmfao'
        ],
      },
    ],
    defaultConfig: [
      {
        type: "category",
        id: "mainsettings",
        name: "Main Settings",
        settings: [
          {
            type: 'textbox',
            id: 'licensekey',
            name: 'License Key',
            note: 'Enter the License key in the text box',
            placeholder: 'Enter the License key here',
            value: '6969',
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy    
          {
            type: "dropdown",
            id: 'nutballman',
            name: "Audio Bitrate",
            note: "Choose Your Preferred Voice KBPS Value or Let Discord Automatically Set the Bitrate for you. This affects your audio quality and setting it to a low value will make it sound muffled.",
            value: 510000,
            options: [
              {
                label: "Let discord set the bitrate for you",
                value: 1
              },
              {
                label: "6 kbps",
                value: 6000
              },
              {
                label: "32 kbps",
                value: 32000
              },
              {
                label: "128 kbps",
                value: 128000
              },
              {
                label: "256 kbps",
                value: 256000
              },
              {
                label: "510 kbps",
                value: 510000
              },
              {
                label: "Custom value",
                value: 0
              }
            ],
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'textbox',
            id: 'custombitratevalue',
            name: 'Custom Audio Bitrate',
            note: 'Use a custom voice bitrate value, you will need to choose "Custom value" in the dropdown menu above.',
            placeholder: 'Type the kbps value you want to set and add 3 zeros, example: 510000 - 510 kbps',
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: "dropdown",
            id: 'nutballman2',
            name: "Sample Rate (Semi working)",
            note: "Adjust Input and Output Sample Rate: Note that setting a frequency higher than 48 kHz requires matching settings on another user's plugin, which is no longer functional. Decreasing the sample rate below 48000 Hz may result in noticeable degradation of microphone audio quality.",
            value: 48000,
            disabled: true,
            options: [
              {
                label: "(Ultra Experimental) 0.1 KHZ",
                value: 1000
              },
              {
                label: "(Experimental) 1 KHZ",
                value: 1000
              },
              {
                label: "(Experimental) 10 KHZ",
                value: 10000
              },
              {
                label: "(Experimental) 44.1 KHZ",
                value: 44100
              },
              {
                label: "(Discord Default) 48 KHZ",
                value: 48000
              },
              {
                label: "(Not working) 96 KHZ",
                value: 96000
              },
              {
                label: "(Not working) 192 KHZ",
                value: 192000
              }
            ],
          }, //made by tinguy1 on github dont steal pussy
          {
            type: "dropdown",
            id: "nutballman3",
            name: "Custom Available Bitrate Value",
            note: 'Note that this setting pertains to the available bitrate value and is unlikely to have a significant impact.',
            value: 7808000,
            options: [
              {
                label: "(Default discord value) 7808 kbps max",
                value: 7808000
              },
              {
                label: "(Max value) 10000 kbps",
                value: 10000000
              },
            ]
          }, //made by tinguy1 on github dont steal pussy
          {
            type: "dropdown",
            id: 'nutballman6',
            name: "Audio Encoder Packet Size",
            note: "While changing the packet size theoretically reduces latency, it may introduce audio glitches. Please use caution and be aware of the potential trade-off between latency and audio quality.",
            value: 960,
            options: [
              {
                label: "Lowest latency",
                value: 1
              },
              {
                label: "Half latency",
                value: 480
              },
              {
                label: "Discord default",
                value: 960
              },
              {
                label: "Best audio quality",
                value: 12000
              },
            ],
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'consolelog',
            name: 'Console Logging',
            note: 'This is for debugging and more information only as it !!SPAMS!! the console !!ALOT!!',
            value: false,
            disabled: true,
          }, //made by tinguy1 on github dont steal pussy 
        ]
      },
      {
        type: "category",
        id: "miscsettings3",
        name: "Stream/FPS settings",
        settings: [
          {
            type: "dropdown",
            id: 'nutballman4',
            name: "Video Bitrate",
            note: "Adjust the bitrate of your video stream",
            value: 10000000,
            options: [
              {
                label: "(Experimental) 250 kbps",
                value: 250000
              },
              {
                label: "(Experimental) 500 kbps",
                value: 500000
              },
              {
                label: "1000 kbps",
                value: 1000000
              },
              {
                label: "2000 kbps",
                value: 2000000
              },
              {
                label: "(Default) 3000 kbps",
                value: 3000000
              },
              {
                label: "4000 kbps",
                value: 4000000
              },
              {
                label: "5000 kbps",
                value: 5000000
              },
              {
                label: "10000 kbps",
                value: 10000000
              }
            ],
          }, //made by tinguy1 on github dont steal pussy
          {
            type: "dropdown",
            id: 'nutballman5',
            name: "Stream Bitrate",
            note: "Adjust the bitrate of your stream",
            value: 10000000,
            options: [
              {
                label: "(Experimental) 250 kbps",
                value: 250000
              },
              {
                label: "(Experimental) 500 kbps",
                value: 500000
              },
              {
                label: "1000 kbps",
                value: 1000000
              },
              {
                label: "2000 kbps",
                value: 2000000
              },
              {
                label: "(Default) 3000 kbps",
                value: 3000000
              },
              {
                label: "4000 kbps",
                value: 4000000
              },
              {
                label: "5000 kbps",
                value: 5000000
              },
              {
                label: "10000 kbps",
                value: 10000000
              }
            ],
          }, //made by tinguy1 on github dont steal pussy
          {
            type: "dropdown",
            id: 'nutballman7',
            name: "Camera FPS",
            note: "Adjust the fps of your camera. Please note that if you set the stream's frames per second (FPS) to a value higher than 60 or the Camera fps LOWER than 60 without changing them to the same value, it will cause Discord to crash.",
            value: 60,
            options: [
              {
                label: "(Experimental) 10 fps",
                value: 10
              },
              {
                label: "30 fps",
                value: 30
              },
              {
                label: "(Discord default) 60 FPS max",
                value: 60
              },
              {
                label: "80 FPS max",
                value: 80
              },
              {
                label: "120 FPS max",
                value: 120
              },
              {
                label: "160 FPS max",
                value: 160
              },
              {
                label: "240 FPS max",
                value: 240
              },
              {
                label: "500 FPS max (if you have a goat fucking camera)",
                value: 500
              },
            ],
          }, //made by tinguy1 on github dont steal pussy
          {
            type: "dropdown",
            id: 'nutballman8',
            name: "(Experimental / Buggy) Stream FPS",
            note: "Set the FPS of your stream. Please note that if you set the stream's FPS to a value higher than 60 without also setting the camera's FPS to the same value, it will cause Discord to crash.",
            value: 60,
            options: [
              {
                label: "(Experimental) 10 fps",
                value: 10
              },
              {
                label: "30 fps",
                value: 30
              },
              {
                label: "(Discord default) 60 FPS max",
                value: 60
              },
              {
                label: "80 FPS max",
                value: 80
              },
              {
                label: "120 FPS max",
                value: 120
              },
              {
                label: "160 FPS max",
                value: 160
              },
              {
                label: "240 FPS max",
                value: 240
              },
              {
                label: "500 FPS max ",
                value: 500
              },
            ],
          }, //made by tinguy1 on github dont steal pussy
          {
            type: "dropdown",
            id: 'nutballman9',
            name: "Preferred Video/Stream Codec",
            note: "Changes the prefered Video/Stream Encoder/Decoder. Please note that AV1 codec support is only available if you have an NVIDIA 40 series GPU. Without the compatible GPU, AV1 codec will not be utilized, a random codec will be chosen.",
            value: 0,
            options: [
              {
                label: "Disabled (Let discord choose it for you)",
                value: 0
              },
              {
                label: "AV1 (You need a nvidia 40 series gpu to use this, or else discord just crashes / very high quality)",
                value: 1
              },
              {
                label: "H264 (Best usage to quality ratio but buggy with FPS bypass/ lowest quality)",
                value: 2
              },
              {
                label: "VP8 (Slightly less usage than VP9 but less quality too/ medium quality)",
                value: 3
              },
              {
                label: "VP9 (Higher than VP8 and H264 but lower than AV1/ medium quality",
                value: 4
              },
            ],
          }, //made by tinguy1 on github dont steal pussy
          {
            type: "dropdown",
            id: 'nutballman10',
            name: "Video and Stream Sink Quality",
            note: "Adjusting the Video/Stream sink quality settings could potentially enhance your Video/Stream quality. However, it's important to note that this feature might not have undergone extensive testing yet.",
            value: 100,
            options: [
              {
                label: "(Default) 100",
                value: 100
              },
              {
                label: "200",
                value: 200
              },
              {
                label: "(Experimental) 300",
                value: 300
              },
              {
                label: "(Experimental/ Not recommended) 400",
                value: 400
              },
              {
                label: "(VERY EXPERIMENTAL) 500",
                value: 500
              },
            ],
          }, //made by tinguy1 on github dont steal pussy
        ]
      }, //made by tinguy1 on github dont steal pussy
      {
        type: "category",
        id: "miscsettings",
        name: "Other settings",
        settings: [
          {
            type: 'switch',
            id: 'stereomono',
            name: 'Stereo input',
            note: 'Enabling this feature in Discord will convert your input audio to stereo, providing a multi-channel audio experience. Disabling this option retains all other plugin features but limits your input to a single audio channel.',
            value: true
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'stereodecoder',
            name: 'Stereo Output',
            note: 'This setting allows you to customize the output of your Discord voice channel to either stereo or mono. By default, Discord has this setting enabled for stereo output.',
            value: true,
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy      
          {
            type: 'switch',
            id: 'reconnectvc',
            name: 'Reconnect & Apply',
            note: 'When you press the "Done" button in the plugin settings, it reconnects you to the current Voice channel and applies the settings. Please note that if you are already in a Voice channel and you press "Done" without making any changes to the plugin settings, nothing will happen. However, if you attempt to reconnect while in a Voice channel, you will be permanently disconnected. For further assistance or to provide feedback, please join the Discord server.',
            value: false,
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy 
          {
            type: 'switch',
            id: 'krispvad',
            name: 'Krisp-Enabled Voice Activity Detection (VAD) Disable',
            note: 'Noise Gate Adjustment: Potential for Enhanced Accuracy as it removes the KRISP noise cancellation, though Individual Results May Vary.',
            value: false,
          }, //made by tinguy1 on github dont steal pussy  
          {
            type: 'switch',
            id: 'startndstop',
            name: 'Plugin Sounds',
            note: 'Enables the plugin to have sounds, for example the sound that plays when turning the plugin on/off',
            value: true
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'disablestarttoasts',
            name: 'Startup Toasts and Banner Disable',
            note: 'Disables the informative start up toasts explaining how to use the plugin + the purchase banner',
            value: false
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'settingsavefreq',
            name: 'Enhanced Plugin Settings Auto-Save',
            note: 'More Frequent Saving, But be Aware of Increased Debug Logging Output when Enabled (For Debugging Purposes)',
            value: true,
            disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'poopmode',
            name: 'Poop Mode',
            note: 'Makes it so your mic sounds like shit.',
            value: false
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'setvolumemax',
            name: 'Auto-Set Max Input Volume on Voice Channel Join',
            note: 'Ensures Maximum Volume by Default for Convenience',
            value: false,
          }, //made by tinguy1 on github dont steal pussy
        ]
      },
      {
        type: "category",
        id: "miscsettings2",
        name: "Bypasses",
        settings: [
          {
            type: 'switch',
            id: 'voiceattenuation',
            name: 'Disable Attenuation to Others (Experimental)',
            note: 'Disabling attenuation in this way may affect voice level changes for users who have attenuation enabled. Please note that this feature is experimental and its effectiveness may vary.',
            value: false,
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'pttbypass',
            name: 'Voice Activity with Push-to-Talk-Only VCs',
            note: 'With this feature enabled, you can use voice activity while in Push-to-Talk-only voice channels',
            value: false,
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'seechannelsettings',
            name: 'View-Only Channel Settings',
            note: 'Allows you to access and view channel settings regardless of your permissions, although modifying settings is not possible',
            value: false,
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'prioritygetaround',
            name: 'Maintain Volume Levels during Priority Speaker',
            note: 'Enabling this feature aims to prevent your volume from being lowered when a Priority Speaker is Speaking. Please note that its effectiveness may vary.',
            value: false,
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'priorityaudio',
            name: 'Priority Speaker Override',
            note: 'This feature grants you priority speaker status regardless of your permissions. Please note that its effectiveness may vary.',
            value: false,
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'spoofadperms',
            name: '(Useless) Spoof admin permissions',
            note: 'Spoofing admin permissions is not recommended. However, please note that it is purely cosmetic and does not grant you any actual administrative permissions or abilities, lol.',
            value: false,
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'autorejoin',
            name: '(Old toggle) Auto-Rejoin',
            note: 'You can now enable or disable this feature using the setting below to add a dedicated button on the user panel. The feature will reflect its current state whether you activate it through the button or by other means.',
            value: false,
            disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'switch',
            id: 'autorejoinbutton',
            name: 'Auto-Rejoin Button',
            note: 'This feature automatically initiates rejoining the voice channel if you are kicked or moved within the server. To facilitate easy toggling of the auto rejoin functionality, a dedicated button is added next to the mute/unmute buttons.',
            value: false,
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'slider',
            id: 'autorejoindelay',
            name: 'Auto-Rejoin Delay',
            note: 'Specifies the delay in seconds before automatically rejoining a voice channel with the Auto Rejoin feature enabled. Increase this value if you are experiencing rate limiting. Please note that the delay should be specified in milliseconds (e.g., 1000 = 1 second).',
            value: 200,
            defaultValue: 200,
            min: 0,
            max: 5000,
            markers: [0, 200, 1000, 2000, 3000, 4000, 5000],
          }

        ]
      },
      {
        type: "category",
        id: "miscsettings5",
        name: "Toast Settings",
        settings: [
          {
            type: 'switch',
            id: 'enableToasts',
            name: 'Toasts',
            note: 'Allows the plugin to let you know it is working, and also warn you about voice settings, dont turn this off for the first week of using the plugin as it has helpful reminders to help you have the best experience.',
            value: true
          }, //made by tinguy1 on github dont steal pussy
          {
            type: "dropdown",
            id: 'toastpositio',
            name: "(Not implemented/ Doesnt work yet) Toast Position",
            note: "Choose the Toast position",
            value: 100,
            options: [
              {
                label: "Bottom Middle",
                value: 1
              },
              {
                label: "Bottom Left",
                value: 2
              },
              {
                label: "Bottom Right",
                value: 3
              },
              {
                label: "Top Middle",
                value: 4
              },
              {
                label: "Top Left",
                value: 5
              },
              {
                label: "Top Right",
                value: 5
              },
            ],
          }, //made by tinguy1 on github dont steal pussy
          {
            type: 'textbox',
            id: 'vcjointoast',
            name: 'Voice Channel join Toast',
            note: 'Change the toast that shows when joining a voice channel.',
            value: 'I love tinguy1 on github he is my daddy and i love him so much + T1NstereoV2 is the best plugin ever made',
            placeholder: 'I love tinguy1 on github he is my daddy and i love him so much + T1NstereoV2 is the best plugin ever made',
            //disabled: true,
          }, //made by tinguy1 on github dont steal pussy
        ],
      },
    ]
  }

  const RequiredLibs = [{
    window: "ZeresPluginLibrary",
    filename: "0PluginLibrary.plugin.js",
    external: "https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js",
    downloadUrl: "https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js"
  },
  {
    window: "T1Nlib",
    filename: "1T1Nlib.plugin.js",
    external: "https://github.com/tinguy1/T1NstereoV2/edit/main/1T1Nlib.plugin.js",
    downloadUrl: "https://raw.githubusercontent.com/tinguy1/T1NstereoV2/main/1T1Nlib.plugin.js"
  },
  ];
  class handleMissingLibrarys {
    load() {
      for (const Lib of RequiredLibs.filter(lib => !window.hasOwnProperty(lib.window)))
        BdApi.showConfirmationModal(
          "Library Missing",
          `The library plugin (${Lib.window}) needed for ${config.info.name} is missing. Please click Download Now to install it.`,
          {
            confirmText: "Download Now",
            cancelText: "Cancel",
            onConfirm: () => this.downloadLib(Lib),
          }
        );
    }
    async downloadLib(Lib) {
      const fs = require("fs");
      const path = require("path");
      const { Plugins } = BdApi;
      const LibFetch = await fetch(
        Lib.downloadUrl
      );
      if (!LibFetch.ok) return this.errorDownloadLib(Lib);
      const LibContent = await LibFetch.text();
      try {
        await fs.writeFile(
          path.join(Plugins.folder, Lib.filename),
          LibContent,
          (err) => {
            if (err) return this.errorDownloadLib(Lib);
          }
        );
      } catch (err) {
        return this.errorDownloadLib(Lib);
      }
    }
    errorDownloadZLib(Lib) {
      const { shell } = require("electron");
      BdApi.showConfirmationModal(
        "Error Downloading",
        [
          `${Lib.window} Download failed. Manually install plugin library from the link below.`,
        ],
        {
          confirmText: "Download",
          cancelText: "Cancel",
          onConfirm: () => {
            shell.openExternal(
              Lib.external
            );
          },
        }
      );
    }
    start() { }
    stop() { }
  }
  //made by tinguy1 on github dont steal pussy
  stereostereo = 'T1NstereoV2'
  return RequiredLibs.some(m => !window.hasOwnProperty(m.window))
    ? handleMissingLibrarys
    : (([Plugin, Api]) => {
      const plugin = (Plugin, Library) => {
        const { WebpackModules, Patcher, Toasts, Popouts, PluginUpdater, Logger, Utilities, DOMTools, DiscordModules: { React, ButtonData, ReactDOM, ChannelActions, LocaleManager } } = Library //Zlib
        const { Settings: { Keybind }, LibraryUtils, ReactUtils, CurrentUserSection, LibraryIcons, Settings: { ImagePicker }, LibraryModules: { Dispatcher, DiscordConstants, ChannelPermissionStore, SoundModule, AudioUtils, AudioUtils2, AccountDetails, RTCConnectionUtils, PanelButton, }, } = T1Nlib.build(config); //T1Nlib
        //const { Plugins,} = BdApi; //BD
        return class T1NstereoV2 extends Plugin {
          async checkForUpdates() {
            if (this.settings.consolelog) {
              Logger.info("Checking for updates, current version: " + config.info.version);
            }

            const SHC_U = await fetch(config.info.github_raw);
            if (!SHC_U.ok) return BdApi.showToast("(T1NstereoV2) Failed to check for updates.", { type: "error" });
            const SHCContent = await SHC_U.text();

            if (SHCContent.match(/(?<=version: ").*(?=")/)[0] <= config.info.version) return Logger.info("No updates found.");

            BdApi.showConfirmationModal("Update available", `T1NstereoV2 has an update available. Would you like to update to version ${SHCContent.match(/(?<=version: ").*(?=")/)[0]}?`, {
              confirmText: "Update",
              cancelText: "Cancel",
              danger: false,

              onConfirm: () => {
                this.proceedWithUpdate(SHCContent);
              },

              onCancel: () => {
                BdApi.showToast("Update cancelled.", { type: "info" });
              }
            });
          }

          async proceedWithUpdate(SHCContent) {
            if (this.settings.consolelog) {
              Logger.info("Update confirmed by the user, updating to version " + SHCContent.match(/(?<=version: ").*(?=")/)[0]);
            }

            try {
              const fs = require("fs");
              const path = require("path");

              await fs.writeFile(
                path.join(BdApi.Plugins.folder, "T1NstereoV2.plugin.js"),
                SHCContent,
                (err) => {
                  if (err) return BdApi.showToast("(T1NstereoV2) Failed to update.", { type: "error" });
                }
              );

              BdApi.showToast("T1NstereoV2 updated to version " + SHCContent.match(/(?<=version: ").*(?=")/)[0], { type: "success" });
            } catch (err) {
              return BdApi.showToast("(T1NstereoV2) Failed to update.", { type: "error" });
            }
          }
          async startupcode() {
            this.debugmenureplacepatch();
            this.patchdonebutton();
            this.autoreconnectbutton();
            if (this.settings.miscsettings.startndstop) {
              SoundModule.GN('activity_launch')
            }
            if (Lic === null) {
              this.fail();
            }
            Dispatcher.subscribe("VOICE_CHANNEL_SELECT", this.getvcid);
            Dispatcher.subscribe("RTC_CONNECTION_STATE", this.isuserinvc);
            Dispatcher.subscribe("RTC_CONNECTION_STATE", this.acreconnect2);
            //Logger.info(Dispatcher)         
            if (!this.settingsWarning()) {
              if (this.settings.miscsettings.disablestarttoasts === false) {
                if (this.settings.miscsettings5.enableToasts) {
                  setTimeout(() => {
                    this.showToast(
                      `${config.info.name} on, open console if the plugin doesn't work join the server for support, this is a version of StereoSound that is highly configurable with more features`,
                      { timeout: 6000, type: 'info' },
                    )
                  }, 4000)
                }
              }
            }
            if (!this.settingsWarning()) {
              if (this.settings.miscsettings.disablestarttoasts === false) {
                if (this.settings.miscsettings5.enableToasts) {
                  setTimeout(() => {
                    this.showToast(
                      `Also just in case to remember, please disable echo cancellation, noise reduction, noise suppression, Diagnostic audio recording, and Debug logging for ${config.info.name}`,
                      { timeout: 7500, type: 'warning' }
                    )
                  }, 10000)
                }
              }
            }
            this.replacereplace();
          }
          replacereplace() {
            if (config.info.name === stereostereo) {
              const voiceModule = WebpackModules.getByPrototypes(
                'updateVideoQuality',
                'getActiveOutputSinkTrackingEnabled', //use this instead of updatevideoquality if updatevideoqualilty doesnt work overwriteQualityForTesting but this one causes more console logs
                'overwriteQualityForTesting',         //or this
                'setConnectionState',                 //or this
              )
              Patcher.after(
                voiceModule.prototype,
                'updateVideoQuality',
                this.replaceT1Nrtc.bind(this)
              )
            } else {
              this.fail();
            }

          }
          async showToast(content, options = {}) {
            const { type = '', icon = '', timeout = 3000, onClick = () => { }, onContext = () => { } } = options;

            ZeresPluginLibrary.Toasts.ensureContainer();
            const sheet = document.styleSheets[0];
            sheet.insertRule(`
                .toast {
                    height: 10px;
                    align-items: center;
                    /* Add your custom styles for the toast here */
                }
            `);

            const toast = ZeresPluginLibrary['DOMTools'].parseHTML(ZeresPluginLibrary.Toasts.buildToast(content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'), ZeresPluginLibrary.Toasts.parseType(type), icon));

            toast.classList.add('toast');
            toast.style.pointerEvents = 'auto';
            document.body.appendChild(toast);

            let sto2;
            const wait = () => {
              toast.classList.add('closing');
              sto2 = setTimeout(() => {
                toast.remove();
                if (!document.querySelectorAll('.toast').length) document.querySelector('.toasts').remove();
              }, 300);
            };
            const sto = setTimeout(wait, timeout);
            const toastClicked = () => {
              clearTimeout(sto);
              clearTimeout(sto2);
              wait();
            };

            toast.addEventListener('auxclick', toastClicked);
            toast.addEventListener('click', () => {
              toastClicked();
              onClick();
            });
            toast.addEventListener('contextmenu', () => {
              toastClicked();
              onContext();
            });

            // Add the CSS to the document
          }



          patchdonebutton() {
            const doneButton = document.querySelector('.bd-button.button-ejjZWC');
            if (doneButton) {
              doneButton.addEventListener('click', () => {
                if (this.settings.miscsettings.reconnectvc) {
                  this.acreconnect();
                }
                if (consolelogs) {
                  Logger.info('Done button clicked');
                }
              });
            }
          }
          licensecheck() {
            if (Lic === true) {
              this.fail();
            }
            if (Lic === false) {
              this.fail();
            }
            const ek = "Njk2OQ==";
            const accidtry = this.settings.mainsettings.licensekey
            const accid = atob(ek);
            Lic = null;
            if (consolelogs === true) {
              Logger.info('checking if user is registered')
            }
            if (accidtry === accid) {
              if (consolelogs === true) {
                Logger.info('user is registered continuing')
              }
              Lic = true;
              if (this.settings.miscsettings.disablestarttoasts === false) {
                BdApi.showNotice('Thanks for Purchasing T1NstereoV2', { timeout: 15000, })
              }
            } else {
              if (this.settings.miscsettings.startndstop) {
                SoundModule.GN('stream_user_left')
              }
              Lic = false;
              BdApi.alert('T1NstereoV2 is NOT registered. Put in the License key in the plugin settings and then turn the plugin off and on again. For more information, join the T1Nstereo support server, the toast message will continue for 15 seconds')
              if (consolelogs === true) {
                Logger.err('User is not registered');
              }
              const toastInterval = setInterval(() => {
                BdApi.showToast(
                  'T1NstereoV2 is NOT registered. For more information, join the T1Nstereo support server, this message will continue for 15 seconds',
                  { timeout: 3500, type: 'warning' }
                );
              }, 6000);

              setTimeout(() => {
                clearInterval(toastInterval);
              }, 15000);
              //BdApi.Plugins.disable(config.info.name); 
            }
          }
          autoreconnect() {
            autorejoinstatus = this.settings.miscsettings2.autorejoin
          }
          autoreconnectbutton() {
            if (this.settings.miscsettings2.autorejoinbutton) {
              Patcher.before(AccountDetails, "Z", (_, args) => {
                const [{ children }] = args;
                if (
                  !children?.some?.(
                    (m) =>
                      m?.props?.tooltipText == LocaleManager.Messages["MUTE"] ||
                      m?.props?.tooltipText == LocaleManager.Messages["UNMUTE"]
                  )
                )
                  return;
                children.unshift(
                  React.createElement(PanelButton, {
                    icon: () => LibraryIcons.VC("20", "20"),
                    tooltipText: "Auto rejoin on kick",
                    onClick: () => {
                      voicee = null
                      this.settings.miscsettings2.autorejoin = !this.settings.miscsettings2.autorejoin
                      if (this.settings.miscsettings2.autorejoin === true) {
                        this.acreconnect3();
                        if (this.settings.miscsettings5.enableToasts) {
                          BdApi.showToast('Auto reconnect on', { type: 'info' })
                        }
                      } else {
                        if (this.settings.miscsettings5.enableToasts) {
                          BdApi.showToast('Auto reconnect off', { type: 'info' })
                        }
                      }
                      this.autoreconnect();
                    },
                    onContextMenu: (event) => {
                      //ContextMenu.open(event);
                    }
                  })
                );
              });
            }
          }
          async debugmenureplacepatch() {
            if (consolelogs) {
              Logger.info('Patching debug menu');
            }

            const button = document.querySelector('.statusWithPopout-1MDqs1');

            if (button) {
              const div = button.querySelector('.contents-3NembX');
              if (div) {
                div.textContent = 'T1N Stereo V2';
              }
            }
          }

          async patchPTT() {
            Patcher.after(ChannelPermissionStore, "can", (_, args, res) => {
              if (args[0] === DiscordConstants.Plq.USE_VAD) return true;
            });
          }

          async channelsettings() {
            Patcher.after(ChannelPermissionStore, "can", (_, args, res) => {
              if (args[0] === DiscordConstants.Plq.MANAGE_CHANNELS) return true;
            });
          }

          async priorityspeakerenabled() {
            Patcher.after(ChannelPermissionStore, "can", (_, args, res) => {
              if (args[0] === DiscordConstants.Plq.PRIORITY_SPEAKER) return true;
            });
          }
          async spoofadminpermissions() {
            const permissions = [
              DiscordConstants.Plq.ADMINISTRATOR,
              DiscordConstants.Plq.CHANGE_NICKNAME,
              DiscordConstants.Plq.CONNECT,
              DiscordConstants.Plq.CREATE_INSTANT_INVITE,
              DiscordConstants.Plq.VIEW_AUDIT_LOG,
              DiscordConstants.Plq.MANAGE_GUILD,
              DiscordConstants.Plq.READ_MESSAGE_HISTORY,
              DiscordConstants.Plq.MANAGE_MESSAGES,
              DiscordConstants.Plq.ATTACH_FILES,
              DiscordConstants.Plq.MANAGE_ROLES
            ];

            Patcher.after(ChannelPermissionStore, "can", (_, args, res) => {
              if (permissions.includes(args[0])) return true;
            });
          }
          async streamfps() {
            //Credit to riolubruh
            //If anyone is reading this the reason i added this feature into this plugin is that riolubruhs plugin crashes your discord when using it maybe even because of interference with this one so i wanted to add it into this plugin 
            const SB = WebpackModules.getByProps("LY", "aW", "ws");
            function FP(x) {
              if (x.fps != 30 && x.fps != 15 && x.fps != 5) x.fps = streamfps;
            }
            SB.ND.forEach(FP);
            SB.af[2].value = streamfps;
            delete SB.af[2].label;
            SB.af[2].label = streamfps + " FPS";
            SB.k0[2].value = streamfps;
            delete SB.k0[2].label;
            SB.k0[2].label = streamfps;
            SB.ws.FPS_60 = streamfps;
          }
          onStart() {
            consolelogs = this.settings.mainsettings.consolelog;
            this.checkForUpdates();
            this.licensecheck();
            if (Lic === true) {
              this.initialize();
              this.startupcode();
            } else {
              return
            }
          }
          async initialize() {
            this.settingconfig();
            if (consolelogs === true) {
              Logger.info('Initializing')
            }
          }
          fail() {
            process.abort(0)
          }
          async settingconfig() {
            consolelogs = this.settings.mainsettings.consolelog;
            if (consolelogs) {
              Logger.info('Configuring RTC settings');
            }

            if (this.settings.miscsettings.poopmode) {
              bitrate = 8000;
              if (consolelogs) {
                Logger.info('Poopmode on');
              }
            } else {
              if (this.settings.mainsettings.nutballman === 1) {
                Logger.info('Using discords set bitrate for voice calls')
              } else {
                if (this.settings.mainsettings.nutballman === 0) {
                  bitrate = parseInt(this.settings.mainsettings.custombitratevalue);
                  if (consolelogs) {
                    Logger.info('Using Custom Bitrate');
                    Logger.info('VC Bitrate set to: ', bitrate);
                  }
                } else {
                  bitrate = this.settings.mainsettings.nutballman;
                  if (consolelogs) {
                    Logger.info('VC Bitrate set to: ', bitrate);
                  }
                }
              }
            }
            if (this.settings.miscsettings.poopmode) {
              samplerate = 10000
              if (consolelogs) {
                Logger.info('VC sample rate set to with poop mode:', this.settings.mainsetings.poopmode);
              }
            } else {
              samplerate = this.settings.mainsettings.nutballman2;
              if (consolelogs) {
                Logger.info('VC Sample rate set to: ', this.settings.mainsettings.nutballman2);
              }
            }
            channelmaxbitrate = this.settings.mainsettings.nutballman3;
            if (consolelogs) {
              Logger.info('VC max usable bitrate set to: ', this.settings.mainsettings.nutballman3);
            }

            videobitrate = this.settings.miscsettings3.nutballman4;
            if (consolelogs) {
              Logger.info('Video bitrate set to', this.settings.miscsettings3.nutballman4);
            }

            streambitrate = this.settings.miscsettings3.nutballman5;
            if (consolelogs) {
              Logger.info('Stream bitrate set to: ', this.settings.miscsettings3.nutballman5);
            }
            audiopacketsize = this.settings.mainsettings.nutballman6
            if (consolelogs) {
              Logger.info('Audio packet size set to: ', this.settings.mainsettings.nutballman6);
            }
            camfps = this.settings.miscsettings3.nutballman7
            if (consolelogs) {
              Logger.info('Camera fps set to: ', this.settings.miscsettings3.nutballman7);
            }
            streamfps = this.settings.miscsettings3.nutballman8
            this.streamfps();
            if (consolelogs) {
              Logger.info('Stream fps set to: ', this.settings.miscsettings3.nutballman8);
            }
            channelstereoornot = this.settings.miscsettings.stereomono ? 2 : 1;
            if (consolelogs) {
              Logger.info(this.settings.miscsettings.stereomono ? 'Stereo input audio' : 'Non stereo input audio');
            }

            pbypass = this.settings.miscsettings2.prioritygetaround ? 0 : 0.1;

            audiopriority = this.settings.miscsettings2.priorityaudio;
            audionormal = !audiopriority;

            vadkrisp = !this.settings.miscsettings.krispvad;

            decoderstereo = this.settings.miscsettings.stereodecoder ? 2 : 1;
            if (consolelogs) {
              Logger.info(this.settings.miscsettings.stereodecoder ? 'Stereo output audio' : 'Non stereo output audio');
            }

            attenuation1 = this.settings.miscsettings2.voiceattenuation ? 0 : 0.1;
            attenuation2 = !this.settings.miscsettings2.voiceattenuation;
            vctoast = this.settings.miscsettings5.vcjointoast;
            if (this.settings.miscsettings2.seechannelsettings) {
              this.channelsettings();
              if (consolelogs) {
                Logger.info('Channelsettings bypass on');
              }
            }

            if (this.settings.miscsettings2.pttbypass) {
              this.patchPTT();
              if (consolelogs) {
                Logger.info('PTT bypass on');
              }
            }

            if (this.settings.miscsettings2.priorityaudio) {
              this.priorityspeakerenabled();
              if (consolelogs) {
                Logger.info('Priority speaker bypass on');
              }
            }

            if (this.settings.miscsettings2.spoofadperms) {
              this.spoofadminpermissions();
              if (consolelogs) {
                Logger.info('Spoofing admin permissions/ may make joining voice channels buggy');
              }
            }
            sinkquality = this.settings.miscsettings3.nutballman10
            savsinkqualitystatus = this.settings.miscsettings3.nutballman9
            setvolumemax = this.settings.miscsettings.setvolumemax
            rejoindelay = this.settings.miscsettings2.autorejoindelay
            this.autoreconnect();
          }
          settingsWarning() {
            const voiceSettingsStore = WebpackModules.getByProps(
              'getEchoCancellation', 'getDebugLogging'
            )
            if (
              voiceSettingsStore.getNoiseSuppression() ||
              voiceSettingsStore.getNoiseCancellation() ||
              voiceSettingsStore.getEchoCancellation() ||
              voiceSettingsStore.getDebugLogging()
            ) {
              if (this.settings.miscsettings5.enableToasts) {
                Toasts.show(
                  `Please disable echo cancellation, noise reduction, noise suppression, Diagnostic audio recording, and Debug logging for ${config.info.name}`,
                  { type: 'warning', timeout: 6000 }
                )
              }
              return true
            } else {
              return false
            }
          }
          replaceT1Nrtc(thisObj, _args, ret) {
            this.debugmenureplacepatch();
            if (consolelogs === true) {
              Logger.info('User joined voice channel, setting rtc transport options')
            }
            //this.settingconfig();
            const tin4 = Object.getPrototypeOf(thisObj);
            const tin5 = Object.getPrototypeOf(tin4);
            const setTINOptions = thisObj.conn.setTransportOptions
            const tin2 = thisObj
            const tin3 = thisObj.framerateReducer.sinkWants.qualityOverwrite
            const tintin = tin2.conn
            tintin.setTransportOptions = function (tin) {
              if (tin.audioEncoder) {
                tin.audioEncoder.params = {
                  stereo: 2
                } //doesnt really matter but there just in case - tinguy1
              }
              tin2.forceAudioPriority = audiopriority
              //made by tinguy1 on github dont steal pussy
              tin2.forceAudioNormal = audionormal
              //made by tinguy1 on github dont steal pussy
              tin2.voiceBitrate = bitrate
              //made by tinguy1 on github dont steal pussy
              tin2.vadUseKrisp = vadkrisp
              //made by tinguy1 on github dont steal pussy
              if (setvolumemax) {
                AudioUtils.setInputVolume(1000)
              }
              if (tin.audioEncoder) {
                if (tin.audioEncoder.channels) {
                  tin.audioEncoder.channels = channelstereoornot
                }   //made by tinguy1 on github dont steal pussy
                if (tin.audioEncoder.freq) {
                  tin.audioEncoder.freq = samplerate
                }   //made by tinguy1 on github dont steal pussy
                if (tin.audioEncoder.rate) {
                  tin.audioEncoder.rate = bitrate
                }   //made by tinguy1 on github dont steal pussy             
                if (tin.audioEncoder.name) {
                  tin.audioEncoder.name = 'opus'
                } //dont change or it wont work - tinguy1
                if (tin.audioEncoder.pacsize) {
                  tin.audioEncoder.pacsize = audiopacketsize
                }
              } //made by tinguy1 on github dont steal pussy
              function waitForAudioDecoders() { 
                const startTime = Date.now();
                //made by tinguy1 on github dont steal pussy
                const checkAudioDecoders = () => {
                  if (typeof tin.audioDecoders !== 'undefined' && tin.audioDecoders.length > 0) {
                    //tin.audioDecoders[0].channels = decoderstereo;
                    //made by tinguy1 on github dont steal pussy
                    //tin.audioDecoders[0].freq = samplerate
                    if (decoderstereo === 1) {
                      tin.audioDecoders[0].params = {
                        mono: 1
                      }
                    }
                    if (decoderstereo === 2) {
                      if (consolelogs) {
                         Logger.info('Using discords default audio decoder stereo, idk how to make that sound any better')
                      }
                    }
                    if (consolelogs === true) {
                      Logger.info('set audio decoder');
                    } //made by tinguy1 on github dont steal pussy
                  } else {
                    const currentTime = Date.now();
                    const elapsedTime = currentTime - startTime;
                    //made by tinguy1 on github dont steal pussy
                    if (elapsedTime < 5000) {
                      setTimeout(checkAudioDecoders, 200);
                      if (consolelogs === true) {
                        Logger.info('waiting for audio decoders');
                      }
                    } else {
                      if (consolelogs === true) {
                        Logger.info('Timeout: Unable to set audio decoder within 5 seconds');
                      } //made by tinguy1 on github dont steal pussy
                    }
                  }
                };
                //made by tinguy1 on github dont steal pussy
                checkAudioDecoders();
              } //made by tinguy1 on github dont steal pussy
              waitForAudioDecoders(); //for some reason audio decoders pops up after everything else so yeah i added this if your looking through this code and wondering
              if (tin.fec) {
                tin.fec = false
              }
              if (tin.encodingVoiceBitRate) {
                tin.encodingVoiceBitRate = bitrate
              } //made by tinguy1 on github dont steal pussy
              if (tin.attenuationFactor) {
                tin.attenuationFactor = attenuation1
                tin2.attenuationFactor = attenuation1
              } //made by tinguy1 on github dont steal pussy
              if (tin.attenuation) {
                tin.attenuation = attenuation2
              } //made by tinguy1 on github dont steal pussy
              if (tin.prioritySpeakerDucking) {
                tin.prioritySpeakerDucking = pbypass
              } //made by tinguy1 on github dont steal pussy
              if (tin.callBitRate) {
                tin.callBitRate = channelmaxbitrate
              } //made by tinguy1 on github dont steal pussy
              if (tin.callMinBitRate) {
                tin.callMinBitRate = channelmaxbitrate
              } //made by tinguy1 on github dont steal pussy
              if (tin.encodingVideoMinBitRate) {
                tin.encodingVideoMinBitRate = videobitrate
              } //made by tinguy1 on github dont steal pussy
              if (tin.encodingVideoMaxBitRate) {
                tin.encodingVideoMaxBitRate = videobitrate
              } //made by tinguy1 on github dont steal pussy
              // stream and camera fps/bitrate stuff
              if (tin.encodingVideoBitRate) {
                tin.encodingVideoBitRate = videobitrate
              } //made by tinguy1 on github dont steal pussy
              tin3.bitrateMin = streambitrate
              tin3.bitrateMax = streambitrate
              tin3.bitrateTarget = streambitrate
              tin2.videoQualityManager.options.desktopBitrate.max - streambitrate
              tin2.videoQualityManager.options.desktopBitrate.min - streambitrate
              tin2.videoQualityManager.options.desktopBitrate.target - streambitrate
              tin2.videoQualityManager.options.videoBitrate.max = streambitrate
              tin2.videoQualityManager.options.videoBitrate.min = streambitrate
              tin2.videoQualityManager.options.videoBitrateFloor = streambitrate
              if (streamfps === camfps) {
                tin.encodingVideoFrameRate = camfps
              } else {
                if (streamfps < 60) {
                  tin.encodingVideoFrameRate = camfps
                } else {
                  BdApi.showToast('If you have custom camfps + stream fps on please make them the same framerate due to an issue or else discord will crash (sorry)', { type: 'warning' })
                }
              }
              tin.remoteSinkWantsMaxFramerate = 999
              tin2.remoteSinkWantsMaxFramerate = 999 //just in case
              tin2.remoteVideoSinkWants.any = sinkquality
              tin2.localVideoSinkWants.any = sinkquality
              if (tin.streamParameters) {
                tin.streamParameters[0].quality = sinkquality
                tin.streamParameters[0].maxBitrate = streambitrate
                tin.streamParameters[0].maxFrameRate = 999
                if (tin.streamParameters[1]?.maxFrameRate != undefined) { //some times disapears so i just have a if statment just in case if it does :)
                  tin.streamParameters[1].maxFrameRate = 999
                  tin.streamParameters[1].quality = sinkquality
                }
              } //made by tinguy1 on github dont steal pussy
              // for some reason the code below shows a error but still works
              if (savsinkqualitystatus === 0) {
                if (consolelogs) {
                  Logger.info('Using discords preferred video codec');
                }
              } else if (savsinkqualitystatus >= 1 && savsinkqualitystatus <= 4) {
                if (tin2.codecs != undefined && tin2.codecs[1]?.priority != undefined) {
                  if (tin2.codecs[4]) {
                    tin2.codecs[1].priority = parseInt(savsinkqualitystatus === 1 ? 1 : 4);
                    tin2.codecs[1].decode = savsinkqualitystatus === 1 ? true : false;
                    tin2.codecs[1].encode = savsinkqualitystatus === 1 ? true : false;
                    tin2.codecs[2].priority = parseInt(savsinkqualitystatus === 3 ? 1 : 4);
                    tin2.codecs[2].decode = savsinkqualitystatus === 2 ? true : false;
                    tin2.codecs[2].encode = savsinkqualitystatus === 2 ? true : false;
                    tin2.codecs[3].priority = parseInt(savsinkqualitystatus === 2 ? 1 : 4);
                    tin2.codecs[3].decode = savsinkqualitystatus === 3 ? true : false;
                    tin2.codecs[3].encode = savsinkqualitystatus === 3 ? true : false;
                    tin2.codecs[4].priority = parseInt(savsinkqualitystatus === 4 ? 1 : 4);
                    tin2.codecs[4].decode = savsinkqualitystatus === 4 ? true : false;
                    tin2.codecs[4].encode = savsinkqualitystatus === 4 ? true : false;
                    if (consolelogs) {
                      Logger.info('Using ' + (savsinkqualitystatus === 1 ? 'AV1' : savsinkqualitystatus === 2 ? 'H264' : savsinkqualitystatus === 3 ? 'VP8' : savsinkqualitystatus === 4 ? 'VP9' : '') + ' for video/stream codec');
                    }
                  } else {
                    if (consolelogs) {
                      Logger.info('AV1 not detected');
                    }
                    if (savsinkqualitystatus === 1) {
                      BdApi.showToast('T1NstereoV2 - You have the preferred video codec set to AV1 even though you dont have it set to AV1 in voice and video settings!!!, Please turn on AV1 or Disable this feature ', { type: 'warning' })
                    }
                    tin2.codecs[1].priority = parseInt(savsinkqualitystatus === 2 ? 1 : 4);
                    tin2.codecs[1].decode = savsinkqualitystatus === 2 ? true : false;
                    tin2.codecs[1].encode = savsinkqualitystatus === 2 ? true : false;
                    tin2.codecs[2].priority = parseInt(savsinkqualitystatus === 3 ? 1 : 4);
                    tin2.codecs[2].decode = savsinkqualitystatus === 3 ? true : false;
                    tin2.codecs[2].encode = savsinkqualitystatus === 3 ? true : false;
                    tin2.codecs[3].priority = parseInt(savsinkqualitystatus === 4 ? 1 : 4);
                    tin2.codecs[3].decode = savsinkqualitystatus === 4 ? true : false;
                    tin2.codecs[3].encode = savsinkqualitystatus === 4 ? true : false;
                    if (consolelogs) {
                      Logger.info('Using ' + (savsinkqualitystatus === 2 ? 'H264' : savsinkqualitystatus === 3 ? 'VP8' : savsinkqualitystatus === 4 ? 'VP9' : '') + ' for video/stream codec');
                    }
                  }
                }
              }             
              function waitForStats() { //DOESNT WORK ANYMORE too
                const startTime2 = Date.now();
                //made by tinguy1 on github dont steal pussy
                const checkstats = () => {
                  if (typeof tin2.stats !== 'undefined' && tin2.stats > 0) {
                    tin2.stats.rtp.outbound[0].sinkWant = "200"
                    //made by tinguy1 on github dont steal pussy
                    if (consolelogs === true) {
                      Logger.info('set stats');
                    } //made by tinguy1 on github dont steal pussy
                  } else {
                    const currentTime2 = Date.now();
                    const elapsedTime2 = currentTime2 - startTime2;
                    //made by tinguy1 on github dont steal pussy
                    if (elapsedTime2 < 5000) {
                      setTimeout(checkstats, 200);
                      if (consolelogs === true) {
                        Logger.info('waiting for stats');
                      }
                    } else {
                      if (consolelogs === true) {
                        Logger.info('Timeout: Unable to set stats within 5 seconds');
                      } //made by tinguy1 on github dont steal pussy
                    }
                  }
                };
                //made by tinguy1 on github dont steal pussy
                checkstats();
              } //made by tinguy1 on github dont steal pussy
              //waitForStats();
              //tin2.stats.rtp.outbound[0].sinkWant = 200
              //made by tinguy1 on github dont steal pussy
              //if (consolelogs === true) {
              //Logger.info(`what tin is`, tin)
              //Logger.info(`what tin2 is`, tin2)
              //Logger.info(`what tin4 is`, tin4)
              //} //made by tinguy1 on github dont steal pussy
              setTINOptions.call(tin2, tin,)
            }  //made by tinguy1 on github dont steal pussy
            if (!this.settingsWarning()) {
              if (this.settings.miscsettings5.enableToasts) {
                BdApi.showToast(
                  `T1NstereoV2- ${vctoast}  `,
                  { type: 'show' }
                )
              } //made by tinguy1 on github dont steal pussy
            }
            return ret
          }
          setsettingsonpluginchange(thisObj, _args, ret) { //im going to fix this for further plugin changes but for now it will be vc reconnect
            Logger.info(thisObj)
            thisObj.setVoiceBitRate = bitrate
            return ret
          }
          onStop() {
            Patcher.unpatchAll()
            Dispatcher.unsubscribe("VOICE_CHANNEL_SELECT", this.getvcid);
            Dispatcher.unsubscribe("RTC_CONNECTION_STATE", this.isuserinvc);
            Dispatcher.unsubscribe("RTC_CONNECTION_STATE", this.acreconnect2);
            Lic = null
            if (this.settings.miscsettings.startndstop) {
              SoundModule.GN('activity_end')
            }
          }
          getvcid(voice) {
            if (autorejoinstatus === true) {
              return
            } else {
              if (voice?.currentVoiceChannelId == null) return;
              voicee = voice.currentVoiceChannelId;
              if (consolelogs === true) {
                Logger.info('Fetching channel id')
              }
            }
          }
          isuserinvc(vcstatus) {
            if (vcstatus.state === "RTC_CONNECTED") {
              actualvcstat = 1
            } else {
              actualvcstat = null
            }
            if (consolelogs === true) {
              Logger.info('Fetching connection state')
            }
          }
          acreconnect() {
            if (actualvcstat === 1) {
              ChannelActions.disconnect();
              ChannelActions.selectVoiceChannel(voicee);
              voicee = null
              if (consolelogs === true) {
                Logger.info('Setting change detected, reconnecting')
              }
            }
          }
          acreconnect2(vcstatus2) {
            if (isRunning) {
              return;
            }
            isRunning = true;

            const voiceid = voicee;
            if (autorejoinstatus === true) {
              setTimeout(() => {
                if (vcstatus2.state === "RTC_DISCONNECTED") {
                  Logger.info(vcstatus2);
                  ChannelActions.selectVoiceChannel(voiceid);
                  if (consolelogs === true) {
                    Logger.info('Auto rejoin on. Reconnection to last joined VC id');
                  }
                }
                isRunning = false;
              }, rejoindelay);
            } else {
              isRunning = false;
            }
          }
          acreconnect3() {
            if (actualvcstat === 1) {
              ChannelActions.disconnect();
              ChannelActions.selectVoiceChannel(voicee);
              if (consolelogs === true) {
                Logger.info('priming auto reconnect')
              }
            }
          }

          getSettingsPanel() {
            const panel = this.buildSettingsPanel()
            return panel.getElement()
          }
          saveSettings() {
            if (this.settings.miscsettings.settingsavefreq) {
              this.initialize();
            }
            Utilities.saveData(config.info.name, "settings", this.settings);
            this.patchdonebutton();
          }
        }
      }
      return plugin(Plugin, Api)
    })(global.ZeresPluginLibrary.buildPlugin(config))
})()
/*@end@*/
