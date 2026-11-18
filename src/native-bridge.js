import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

// Keep the calculator UI framework-free while exposing the native Capacitor plugins.
window.OmniNativeSpeech = SpeechRecognition;
window.OmniNativeFiles = { Filesystem, Directory, Encoding, Share };
